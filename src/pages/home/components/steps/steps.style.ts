import { createUseStyles } from 'react-jss';
export const useStyles = createUseStyles({
    container: {
      padding: '20px',
    },
    header: {
      fontSize: '24px',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '20px',
    },
    subHeader: {
      fontSize: '16px',
      color: 'blue',
      textAlign: 'center',
      marginBottom: '20px',
    },
    stepCard: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
      backgroundColor: '#f0f0f0',
      marginBottom: '10px',
      textAlign: 'center',
      '@media (min-width: 768px)': {
        padding: '20px',
      },
    },
    stepNumber: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginRight: '10px',
    },
    stepText: {
      fontSize: '16px',
    },
  });
  