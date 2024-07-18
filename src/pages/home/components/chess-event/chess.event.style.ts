import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      textAlign: 'center',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'left',
      },
    },
    image: {
      width: '100%',
      '@media (min-width: 768px)': {
        width: '50%',
      },
    },
    content: {
      marginTop: '20px',
      '@media (min-width: 768px)': {
        marginTop: '0',
        marginLeft: '20px',
        width: '50%',
      },
    },
    header: {
      fontSize: '24px',
      color: 'red',
    },
    text: {
      fontSize: '18px',
    },
    table: {
      marginTop: '10px',
      borderCollapse: 'collapse',
      width: '100%',
      '& tbody':{
        border:'none',
      '& td, & th': {
        
        padding: '5px 10px',
      },
    }
    },
  });
  