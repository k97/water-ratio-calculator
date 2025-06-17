import React from 'react';
import { Paper, Box, Typography, Button, NativeSelect, ButtonBase, useTheme as useMuiTheme } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ingredients, Ingredient } from '../data/ingredients';
import { useTheme } from '../lib/theme-context';

interface CalculatorProps {
  selectedIngredient: Ingredient | null;
  portions: number;
  cupSize: number;
  measurementMode: 'portion' | 'cupSize';
  onIngredientChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onPortionIncrease: () => void;
  onPortionDecrease: () => void;
  onCupSizeIncrease: () => void;
  onCupSizeDecrease: () => void;
  onMeasurementToggle: () => void;
}

const Calculator: React.FC<CalculatorProps> = ({
  selectedIngredient,
  portions,
  cupSize,
  measurementMode,
  onIngredientChange,
  onPortionIncrease,
  onPortionDecrease,
  onCupSizeIncrease,
  onCupSizeDecrease,
  onMeasurementToggle
}) => {
  const muiTheme = useMuiTheme();
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);
  
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Use a safe default during server-rendering
  const isDarkMode = isMounted ? theme === 'dark' : false;
  
  return (
    <Box>
      {/* Ingredient Selection */}
      <Paper 
        elevation={0} 
        sx={{ 
          p: 3, 
          borderRadius: 8, 
          mb: 3, 
          backgroundColor: isDarkMode ? '#FFC4FF' : '#FFFCFF',
          color: isDarkMode ? '#3F204D' : '#812AC7',
          boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
          position: 'relative',
          cursor: 'pointer',
          '&:hover': {
            backgroundColor: isDarkMode ? '#FFC4FF' : '#FAEAFF',
          }
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          pointerEvents: 'none',
          minHeight: '60px'
        }}>
          <Typography variant="h4" sx={{ 
            fontWeight: 700, 
          color: isDarkMode ? '#3F204D' : '#82755A',
            fontSize: '1.60rem',
            letterSpacing: '-0.25px'
          }}>
            {selectedIngredient ? selectedIngredient.name : 'Choose an ingredient'}
          </Typography>
          <KeyboardArrowDownIcon sx={{ 
            fontSize: '2rem', 
            color: '#9e9e9e' 
          }} />
        </Box>
        <NativeSelect
          id="ingredient-select"
          value={selectedIngredient ? selectedIngredient.id : ''}
          onChange={onIngredientChange}
          sx={{
            position: 'absolute',
            opacity: 0,
            width: '100%',
            height: '100%',
            minHeight: '60px',
            top: 0,
            left: 0,
            cursor: 'pointer',
            fontSize: '16px', // Prevents zoom on iOS
            '&:focus': {
              outline: 'none'
            }
          }}
        >
          <option value="">Choose an ingredient...</option>
          
          {/* Basic Grains */}
          <optgroup label="Basic Grains">
            {ingredients.filter(ingredient => ['Grain', 'Raw', 'Oats'].includes(ingredient.type)).map(ingredient => (
              <option key={ingredient.id} value={ingredient.id}>
                {ingredient.name}
              </option>
            ))}
          </optgroup>
          
          {/* Rice Varieties */}
          <optgroup label="Rice">
            {ingredients.filter(ingredient => ingredient.type === 'Rice').map(ingredient => (
              <option key={ingredient.id} value={ingredient.id}>
                {ingredient.name}
              </option>
            ))}
          </optgroup>
          
          {/* Quinoa Varieties */}
          <optgroup label="Quinoa">
            {ingredients.filter(ingredient => ingredient.type === 'Quinoa').map(ingredient => (
              <option key={ingredient.id} value={ingredient.id}>
                {ingredient.name}
              </option>
            ))}
          </optgroup>
          
          {/* Pasta Varieties */}
          <optgroup label="Pasta">
            {ingredients.filter(ingredient => ingredient.type === 'Pasta' || ingredient.type === 'Dried').map(ingredient => (
              <option key={ingredient.id} value={ingredient.id}>
                {ingredient.name}
              </option>
            ))}
          </optgroup>
          
          {/* Lentil Varieties */}
          <optgroup label="Lentils">
            {ingredients.filter(ingredient => ingredient.type === 'Lentil').map(ingredient => (
              <option key={ingredient.id} value={ingredient.id}>
                {ingredient.name}
              </option>
            ))}
          </optgroup>
          
          {/* Couscous Varieties */}
          <optgroup label="Couscous">
            {ingredients.filter(ingredient => ingredient.type === 'Couscous').map(ingredient => (
              <option key={ingredient.id} value={ingredient.id}>
                {ingredient.name}
              </option>
            ))}
          </optgroup>
          
          {/* Legumes */}
          <optgroup label="Legumes">
            {ingredients.filter(ingredient => ingredient.type === 'Legume').map(ingredient => (
              <option key={ingredient.id} value={ingredient.id}>
                {ingredient.name}
              </option>
            ))}
          </optgroup>
          
          {/* Vegetables */}
          <optgroup label="Vegetables">
            {ingredients.filter(ingredient => ingredient.type === 'Vegetable').map(ingredient => (
              <option key={ingredient.id} value={ingredient.id}>
                {ingredient.name}
              </option>
            ))}
          </optgroup>
        </NativeSelect>
      </Paper>

      {/* Measurement Control - Only show when ingredient is selected */}
      {selectedIngredient && (
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          mb: 3 
        }}>
          <Button 
            variant="contained" 
            sx={{ 
              width: 120,
              height: 80,
              borderRadius: 8,
              backgroundColor: isDarkMode ? '#FFC4FF' : '#FFFCFF',
              color: isDarkMode ? '#3F204D' : '#812AC7',
              fontSize: '2rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
              '&:hover': {
                backgroundColor: isDarkMode ? '#FFC4FF' : '#f8f9fa',
                boxShadow: '0 6px 25px rgba(0,0,0,0.12)'
              },
              '&:disabled': {
                opacity: 0.5,
                cursor: 'not-allowed'
              }
            }}
            onClick={measurementMode === 'cupSize' ? onCupSizeDecrease : onPortionDecrease}
            disabled={measurementMode === 'cupSize' ? cupSize <= 0.5 : portions <= 1}
          >
            <RemoveIcon sx={{ fontSize: '2rem' }} />
          </Button>
          
          <ButtonBase
            onClick={onMeasurementToggle}
            sx={{
              borderRadius: 2,
              px: 3,
              textAlign: 'center'
            }}
          >
            <Box sx={{ 
              textAlign: 'center', 
              px: 3,
            }}>
              <Typography variant="h5" sx={{ 
                color: isDarkMode ? '#ffffff' : '#3e2723',
                fontWeight: 600,
                fontSize: '1.5rem',
                letterSpacing: '-0.06em',
                whiteSpace: 'nowrap',
                lineHeight: 1.4
              }}>
                {measurementMode === 'cupSize' 
                  ? `${cupSize} Cup${cupSize !== 1 ? 's' : ''}`
                  : `${portions} serve${portions > 1 ? 's' : ''}`
                }
                
              </Typography>
              <Typography variant="h6" sx={{ 
                color: isDarkMode ? '#e0e0e0' : '#555',
                fontWeight: 500,
                fontSize: '1.05rem',
                whiteSpace: 'nowrap',
              }}>
                {measurementMode === 'cupSize' ? 'Cup Size' : 'Portion'}
              </Typography>

            </Box>
          </ButtonBase>
          
          <Button 
            variant="contained" 
            sx={{ 
              width: 120,
              height: 80,
              borderRadius: 8,
              backgroundColor: isDarkMode ? '#FFC4FF' : '#FFFCFF',
              color: isDarkMode ? '#3F204D' : '#812AC7',
              fontSize: '2rem',
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
              '&:hover': {
                backgroundColor: isDarkMode ? '#FFC4FF' : '#f8f9fa',
                boxShadow: '0 6px 25px rgba(0,0,0,0.12)'
              }
            }}
            onClick={measurementMode === 'cupSize' ? onCupSizeIncrease : onPortionIncrease}
          >
            <AddIcon sx={{ fontSize: '2rem' }} />
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Calculator;
