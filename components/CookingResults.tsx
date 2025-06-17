import React from 'react';
import { Paper, Box, Typography, useTheme as useMuiTheme } from '@mui/material';
import { Ingredient } from '../data/ingredients';
import ResultCard from './ResultCard';
import { useTheme } from '../lib/theme-context';

interface CookingResultsProps {
  ingredient: Ingredient;
  portions: number;
  cupSize: number;
  measurementMode: 'portion' | 'cupSize';
}

const CookingResults: React.FC<CookingResultsProps> = ({ ingredient, portions, cupSize, measurementMode }) => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = React.useState(false);
  
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Default to light during SSR to prevent hydration mismatch
  const isDarkMode = isMounted ? theme === 'dark' : false;
  
  // Calculate the total amount based on measurement mode
  const totalAmount = measurementMode === 'portion' 
    ? ingredient.servingSize * portions 
    : ingredient.servingSize * cupSize;
  
  // Calculate water amount
  const waterAmount = totalAmount * ingredient.waterRatio;
  
  return (
  <>
    <ResultCard
      title={ingredient.name}
      subtitle={ingredient.type}
      value={totalAmount}
      unit={ingredient.servingUnit}
      subValue={`${Math.round(totalAmount * 10)} gms`}
    />
    
    <ResultCard
      title="Water"
      value={waterAmount}
      unit={ingredient.servingUnit}
      subValue={`${Math.round(waterAmount * 10)} ml`}
    />
    
    <ResultCard
      title="Cooking Time"
      value={ingredient.cookingTime}
      unit="Min"
    />
    
    {/* Cooking Instructions */}
    <Paper 
      elevation={0} 
      sx={{ 
        p: 3,
        borderRadius: 8,
        backgroundColor: isDarkMode ? '#3F1C57' : 'rgba(255, 255, 255, 0.9)',
        mb: 2,
      }}
    >
      <Typography variant="h6" sx={{ 
        mb: 2, 
        color: isDarkMode ? '#ffffff' : '#854F92',
        fontWeight: 800,
        fontFamily: '--apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Barlow, Helvetica, Arial, sans-serif',
        fontSize: '1.25rem',
        fontStretch: 'expanded',
        letterSpacing: '-0.04em',
      }}>
        Cooking Instructions
      </Typography>
      
      {ingredient.instructions.map((instruction, index) => (
        <Box key={index} sx={{ 
            display: 'flex', 
            mb: 3, 
            textAlign: 'left',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 2,
            py:0.15
             }}>
          <Box 
            sx={{ 
              minWidth: 40,
              height: 40,
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              color: isDarkMode ? '#9e4fb7' : '#C9C9C9',
              fontWeight: 800,
              fontFamily: '--apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Barlow, Helvetica, Arial, sans-serif',
                fontSize: '2.25rem',
                fontStretch: 'expanded',
            }}
          >
            {index + 1}
          </Box>
          <Typography variant="body1" sx={{
            fontSize: '1.125rem',
            color: isDarkMode ? '#e0e0e0' : '#484848',
            }}>
            {instruction}
          </Typography>
        </Box>
      ))}
    </Paper>
  </>
  );
};

export default CookingResults;
