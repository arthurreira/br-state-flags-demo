import { useState, useMemo, memo } from 'react';
import { Search, Filter, MapPin, Info, ChevronDown, Map as MapIcon, LayoutGrid, List } from 'lucide-react';
import DottedMapView from '../dotted-map-view';
import { statesData } from 'br-state-flags';
import { REGIONS_CONFIG } from '../../../lib/constants';
import { resolveFlagComponent } from '../../../lib/flag-resolver';
import { isValidRegion } from '../../../lib/validation';

// Map package data to component format - memoized to avoid recalculation
const STATES_DATA = Object.values(statesData).map(state => ({
  code: state.uf,
  name: state.name,
  lat: state.coordinates.latitude,
  lng: state.coordinates.longitude,
  region: state.region,
  capital: state.capital,
  population: 'N/A' // Population data not available in package
}));

// Reusable components
const RegionBadge = memo(({ region, className = '' }: { region: string; className?: string }) => {
  const config = isValidRegion(region) ? REGIONS_CONFIG[region as keyof typeof REGIONS_CONFIG] : null;
  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${config?.bgClass || 'bg-gray-100 text-gray-800'} ${className}`}>
      {region}
    </span>
  );
});
RegionBadge.displayName = 'RegionBadge';

interface StateCardProps {
  state: typeof STATES_DATA[number];
  isSelected: boolean;
  onClick: () => void;
}

const StateCard = memo(({ state, isSelected, onClick }: StateCardProps) => {
  const resolution = resolveFlagComponent(state.code);
  const { component: FlagComponent, viewBox: flagViewBox } = resolution || { component: null, viewBox: undefined, isValid: false };

  return (
    <div
      onClick={onClick}
      className={`
        relative p-4 rounded-lg border cursor-pointer transition-all duration-200
        ${isSelected
          ? 'ring-2 ring-primary bg-primary/10 border-primary shadow-lg'
          : 'bg-card/50 border-border hover:border-primary hover:bg-card hover:shadow-md'
        }
      `}
    >
      <div className="flex items-start gap-3">
        <div className="flex-none w-14 h-9 rounded border border-border overflow-hidden shadow-sm bg-background">
          {FlagComponent ? (
            <FlagComponent
              className="w-full h-full"
              viewBox={flagViewBox}
              preserveAspectRatio="xMidYMid meet"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs">{state.code}</div>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-base font-bold text-foreground">{state.code}</h3>
            <RegionBadge region={state.region} />
          </div>
          <p className="text-sm text-foreground font-medium">{state.name}</p>
          <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
            <span>{state.capital}</span>
          </div>
        </div>
      </div>

      {isSelected && (
        <div className="absolute top-2 right-2">
          <MapPin className="w-4 h-4 text-primary" />
        </div>
      )}
    </div>
  );
});
StateCard.displayName = 'StateCard';

const FilterPanel = ({ selectedRegion, onRegionChange, searchQuery, onSearchChange }: { selectedRegion: string | null; onRegionChange: (region: string | null) => void; searchQuery: string; onSearchChange: (query: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search states..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2 bg-card border border-border rounded-lg text-foreground hover:bg-secondary transition-colors"
        >
          <span className="flex items-center gap-2">
            <Filter className="w-4 h-4" />
            {selectedRegion ? selectedRegion : 'All Regions'}
          </span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-10 overflow-hidden">
            <button
              onClick={() => {
                onRegionChange(null);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left text-foreground hover:bg-secondary transition-colors"
            >
              All Regions
            </button>
            {Object.keys(REGIONS_CONFIG).map((region) => (
              <button
                key={region}
                onClick={() => {
                  onRegionChange(region);
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-foreground hover:bg-secondary transition-colors flex items-center gap-2"
              >
                <RegionBadge region={region} />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

interface StatsPanelProps {
  states: typeof STATES_DATA;
  selectedRegion: string | null;
}

const StatsPanel = memo(({ states, selectedRegion }: StatsPanelProps) => {
  const stats = useMemo(() => {
    const filtered = selectedRegion
      ? states.filter(s => s.region === selectedRegion)
      : states;

    const regionCounts: Record<string, number> = {};
    states.forEach(state => {
      regionCounts[state.region] = (regionCounts[state.region] || 0) + 1;
    });

    return {
      total: filtered.length,
      regions: Object.keys(regionCounts).length,
      regionCounts
    };
  }, [states, selectedRegion]);

  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="bg-card rounded-lg p-3 border border-border">
        <div className="text-2xl font-bold text-foreground">{stats.total}</div>
        <div className="text-xs text-muted-foreground">States</div>
      </div>
      <div className="bg-card rounded-lg p-3 border border-border">
        <div className="text-2xl font-bold text-foreground">{stats.regions}</div>
        <div className="text-xs text-muted-foreground">Regions</div>
      </div>
      <div className="bg-card rounded-lg p-3 border border-border">
        <div className="text-2xl font-bold text-foreground">27</div>
        <div className="text-xs text-muted-foreground">Total</div>
      </div>
    </div>
  );
});
StatsPanel.displayName = 'StatsPanel';

export default function BrazilianStatesMap() {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'map' | 'grid' | 'list'>('map');

  const filteredStates = useMemo(() => {
    return STATES_DATA.filter(state => {
      const matchesSearch = state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        state.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        state.capital.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRegion = !selectedRegion || state.region === selectedRegion;
      return matchesSearch && matchesRegion;
    });
  }, [searchQuery, selectedRegion]);

  const selectedStateData = useMemo(() => {
    return selectedState ? STATES_DATA.find(s => s.code === selectedState) : null;
  }, [selectedState]);

  const flagResolution = useMemo(() => {
    return selectedStateData ? resolveFlagComponent(selectedStateData.code) : null;
  }, [selectedStateData]);
  
  const { component: SelectedFlagComponent, viewBox: selectedFlagViewBox } = flagResolution || { component: null, viewBox: undefined, isValid: false };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            🇧🇷 Brazilian States Explorer
          </h1>
          <p className="text-muted-foreground">
            Interactive directory of all 27 Brazilian states organized by region
          </p>
        </div>

        {/* Stats */}
        <StatsPanel states={STATES_DATA} selectedRegion={selectedRegion} />

        {/* Filters */}
        <FilterPanel
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Selected State Detail */}
        {selectedStateData && (
          <div className="bg-card rounded-lg p-6 border border-primary/50">
            <div className="flex items-start gap-4">
              <div className="flex-none w-20 h-14 rounded-lg border-2 border-border overflow-hidden shadow-lg bg-background">
                {SelectedFlagComponent ? (
                  <SelectedFlagComponent
                    className="w-full h-full"
                    viewBox={selectedFlagViewBox}
                    preserveAspectRatio="xMidYMid meet"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">{selectedStateData.code}</div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-2xl font-bold text-foreground">{selectedStateData.name}</h2>
                  <RegionBadge region={selectedStateData.region} />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Code</div>
                    <div className="font-semibold text-foreground">{selectedStateData.code}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Capital</div>
                    <div className="font-semibold text-foreground">{selectedStateData.capital}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Coordinates</div>
                    <div className="font-semibold text-xs text-foreground">
                      {selectedStateData.lat.toFixed(2)}°, {selectedStateData.lng.toFixed(2)}°
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedState(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Results count */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Showing {filteredStates.length} of {STATES_DATA.length} states
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('map')}
              className={`px-3 py-1 rounded text-sm flex items-center gap-2 ${viewMode === 'map' ? 'bg-primary text-primary-foreground' : 'bg-card border border-border'}`}
            >
              <MapIcon className="w-4 h-4" />
              Map
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-1 rounded text-sm flex items-center gap-2 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-card border border-border'}`}
            >
              <LayoutGrid className="w-4 h-4" />
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-1 rounded text-sm flex items-center gap-2 ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-card border border-border'}`}
            >
              <List className="w-4 h-4" />
              List
            </button>
          </div>
        </div>

        {/* View Content */}
        {viewMode === 'map' ? (
          <DottedMapView />
        ) : (
          <div className={
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
              : 'space-y-3'
          }>
            {filteredStates.map((state) => (
              <StateCard
                key={state.code}
                state={state}
                isSelected={selectedState === state.code}
                onClick={() => setSelectedState(state.code)}
              />
            ))}
          </div>
        )}

        {viewMode !== 'map' && filteredStates.length === 0 && (
          <div className="text-center py-12">
            <Info className="w-12 h-12 mx-auto text-muted mb-3" />
            <p className="text-muted-foreground">No states found matching your criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}