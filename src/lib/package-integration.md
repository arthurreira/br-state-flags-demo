# Package Integration Guide

## ✨ New in br-state-flags v0.1.0+

The `br-state-flags` package now includes all the features we needed! No more workarounds! 🎉

### What's New:

- ✅ **All flags have `viewBox` attributes** - Perfect scaling out of the box
- ✅ **Type-safe `flagComponents` map** - Direct access to all components
- ✅ **`getFlagComponent(uf)` utility** - Safe component retrieval
- ✅ **`resolveFlagComponent(uf)` utility** - Full resolution with validation
- ✅ **`FLAG_VIEWBOXES` metadata export** - ViewBox values for all flags
- ✅ **Built-in TypeScript types** - Full type safety

## Recommended Usage Patterns

### 1. Direct Component Access (Static)

Perfect for when you know the state code at compile time:

```tsx
import { SP, RJ, MG } from 'br-state-flags';

function MyComponent() {
  return (
    <div className="flex gap-4">
      <SP className="w-12 h-12" />
      <RJ className="w-12 h-12" />
      <MG className="w-12 h-12" />
    </div>
  );
}
```

**Benefits:**
- Tree-shakeable
- Zero runtime overhead
- Full type safety

### 2. Dynamic Access with `getFlagComponent` (Recommended)

Perfect for dynamic state codes:

```tsx
import { getFlagComponent, FLAG_VIEWBOXES } from 'br-state-flags';
import type { BRStateUF } from 'br-state-flags';

function DynamicFlag({ stateCode }: { stateCode: BRStateUF }) {
  const FlagComponent = getFlagComponent(stateCode);
  
  if (!FlagComponent) {
    return <div>Flag not found</div>;
  }
  
  return (
    <FlagComponent 
      viewBox={FLAG_VIEWBOXES[stateCode]}
      className="w-12 h-12" 
    />
  );
}
```

**Benefits:**
- Type-safe
- Handles missing components gracefully
- Includes viewBox automatically

### 3. Full Resolution with `resolveFlagComponent` (Best for Production)

Perfect for production code with validation:

```tsx
import { resolveFlagComponent } from 'br-state-flags';

function SafeFlag({ stateCode }: { stateCode: string }) {
  const { component: FlagComponent, viewBox, isValid } = resolveFlagComponent(stateCode);
  
  if (!isValid || !FlagComponent) {
    return <div className="text-red-500">Invalid state code: {stateCode}</div>;
  }
  
  return (
    <FlagComponent 
      viewBox={viewBox}
      className="w-12 h-12"
      aria-label={`Flag of ${stateCode}`}
    />
  );
}
```

**Benefits:**
- Validates state codes
- Returns component + viewBox + validation status
- Production-ready error handling

### 4. Using the `flagComponents` Map

For advanced use cases:

```tsx
import { flagComponents, FLAG_VIEWBOXES } from 'br-state-flags';
import type { BRStateUF } from 'br-state-flags';

function FlagList({ states }: { states: BRStateUF[] }) {
  return (
    <div className="flex gap-2">
      {states.map(stateCode => {
        const FlagComponent = flagComponents[stateCode];
        if (!FlagComponent) return null;
        
        return (
          <FlagComponent
            key={stateCode}
            viewBox={FLAG_VIEWBOXES[stateCode]}
            className="w-8 h-8"
          />
        );
      })}
    </div>
  );
}
```

## Data Access

The package also provides rich state data:

```tsx
import { statesData, getStateName, getRegionName } from 'br-state-flags';
import type { Locale, BRStateData } from 'br-state-flags';

// Get all state data
const allStates = Object.values(statesData);

// Get localized names
const name = getStateName('SP', 'en'); // "São Paulo"
const region = getRegionName('Southeast', 'pt-BR'); // "Sudeste"

// Access full state data
const spData: BRStateData = statesData.SP;
console.log(spData.population); // 46289333
console.log(spData.capital); // "São Paulo"
console.log(spData.timezone); // "America/Sao_Paulo"
```

## Complete Example

Here's a complete example showing all the new features:

```tsx
import { 
  resolveFlagComponent,
  getFlagComponent,
  flagComponents,
  FLAG_VIEWBOXES,
  statesData,
  getStateName,
  type BRStateUF 
} from 'br-state-flags';

function StateCard({ stateCode }: { stateCode: BRStateUF }) {
  // Method 1: Full resolution (recommended)
  const { component: FlagComponent, viewBox, isValid } = resolveFlagComponent(stateCode);
  
  // Method 2: Direct access
  // const FlagComponent = getFlagComponent(stateCode);
  
  // Method 3: Map access
  // const FlagComponent = flagComponents[stateCode];
  
  const stateData = statesData[stateCode];
  const stateName = getStateName(stateCode, 'en');
  
  if (!isValid || !FlagComponent) {
    return <div>Invalid state: {stateCode}</div>;
  }
  
  return (
    <div className="border rounded-lg p-4">
      <FlagComponent 
        viewBox={viewBox}
        className="w-24 h-16 mb-2"
      />
      <h3 className="font-bold">{stateName}</h3>
      <p className="text-sm text-gray-600">
        Capital: {stateData.capital}
      </p>
      <p className="text-sm text-gray-600">
        Population: {stateData.population.toLocaleString()}
      </p>
    </div>
  );
}
```

## Migration from Workarounds

### Before (v0.0.x - Workarounds Needed)

```tsx
// Had to use workarounds
import { resolveFlagComponent } from '../lib/flag-resolver'; // Local workaround
import { FLAG_VIEWBOXES } from '../lib/constants'; // Local mapping

const { component, viewBox } = resolveFlagComponent('SP');
```

### After (v0.1.0+ - Package Native)

```tsx
// Everything comes from the package!
import { resolveFlagComponent, FLAG_VIEWBOXES } from 'br-state-flags';

const { component, viewBox } = resolveFlagComponent('SP');
```

## Type Safety

All utilities are fully typed:

```tsx
import type { 
  BRStateUF,
  FlagComponent,
  FlagResolutionResult 
} from 'br-state-flags';

// Type-safe state codes
const validCode: BRStateUF = 'SP'; // ✅
const invalidCode: BRStateUF = 'XX'; // ❌ TypeScript error

// Type-safe component access
const component: FlagComponent | null = getFlagComponent('SP');

// Type-safe resolution
const result: FlagResolutionResult = resolveFlagComponent('SP');
```

## Performance Tips

1. **Static imports are tree-shakeable**: Import only what you need
   ```tsx
   import { SP, RJ } from 'br-state-flags'; // Only SP and RJ in bundle
   ```

2. **Use `getFlagComponent` for dynamic access**: It's optimized
   ```tsx
   const Flag = getFlagComponent(stateCode); // Fast lookup
   ```

3. **Memoize flag components in lists**: 
   ```tsx
   const flags = useMemo(() => 
     states.map(code => getFlagComponent(code)),
     [states]
   );
   ```

## No More Workarounds! 🎉

- ✅ **ViewBox**: Included in all components
- ✅ **Type Safety**: Package provides typed access
- ✅ **Utilities**: Built into the package
- ✅ **Metadata**: Exported from package
- ✅ **Validation**: Built-in validation functions

Everything you need is now in the package!
