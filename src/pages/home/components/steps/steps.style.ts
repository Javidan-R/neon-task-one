import { createUseStyles } from 'react-jss';
import cardBackground from '../../../../assets/images/statics/cardBack.png';
import { rem } from '../../../../assets/styles/abstracts/functions';
import { breakpoint } from '../../../../assets/styles/abstracts/mixins';

export  const useStyles = createUseStyles({
  container: {
    padding: rem(50),
    paddingTop: rem(120),
    [breakpoint(1200)]: {
      padding: rem(40),
      paddingTop: rem(100),
    },
    [breakpoint(1024)]: {
      padding: rem(30),
      paddingTop: rem(80),
    },
    [breakpoint(768)]: {
      padding: rem(20),
      paddingTop: rem(60),
    },
    [breakpoint(480)]: {
      padding: rem(10),
      paddingTop: rem(40),
    },
  },
  header: {
    display: 'inline-block',
    width: '60%',
    fontSize: rem(54),
    textAlign: 'left',
    marginBottom: rem(20),
    lineHeight: rem(64.8),
    position: 'relative',
    [breakpoint(1200)]: {
      width: '70%',
      fontSize: rem(48),
      marginBottom: rem(18),
      lineHeight: rem(55),
    },
    [breakpoint(1024)]: {
      width: '70%',
      fontSize: rem(40),
      marginBottom: rem(16),
      lineHeight: rem(50),
    },
    [breakpoint(768)]: {
      width: '90%',
      fontSize: rem(32),
      marginBottom: rem(14),
      lineHeight: rem(45),
    },
    [breakpoint(480)]: {
      fontSize: rem(30),
      marginBottom: rem(12),
      lineHeight: rem(35),

      width: '100%',
      textAlign: 'center',
    },
  },
  subHeader: {
    display: 'inline-block',
    width: '30%',
    position: 'relative',
    top: '15.5%',
    left: '-35%',
    fontSize: rem(20),
    lineHeight: rem(24),
    color: '#3057A2',
    textAlign: 'left',
    marginBottom: rem(20),
    [breakpoint(1200)]: {
      fontSize: rem(18),
      marginBottom: rem(18),
    },
    [breakpoint(1024)]: {
      fontSize: rem(17),
      marginBottom: rem(16),
      width: '70%',
      top: '15.5%',
      left: '0',
    },
    [breakpoint(768)]: {
      width: '50%',
      top: '15.5%',
      left: '0',
      fontSize: rem(16),
      marginBottom: rem(14),
    },
    [breakpoint(480)]: {
      fontSize: rem(12),
      marginBottom: rem(12),
      width: '100%',
      textAlign: 'center',
      left: '0',
      top: '0',
    },
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: rem(16),
    [breakpoint(1200)]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [breakpoint(768)]: {
      gridTemplateColumns: '1fr',
    },
  },
  stepCard: {
    minHeight: rem(112),
    backgroundColor: '#f0f0f0',
    marginBottom: rem(10),
    backgroundImage: `url(${cardBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: rem(20),
    display: 'flex',
    alignItems: 'start',
    borderRadius: rem(5),
    position: 'relative',
    [breakpoint(1200)]: {
      padding: rem(18),
    },
    [breakpoint(768)]: {
      padding: rem(15),
    },
    [breakpoint(480)]: {
      padding: rem(10),
      minHeight: rem(100),
    },
  },
  stepNumberContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: rem(40),
    height: rem(40),
    borderRadius: '50%',
    backgroundColor: '#ffffff',
    marginRight: rem(10),
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
    [breakpoint(1200)]: {
      width: rem(35),
      height: rem(35),
    },
    [breakpoint(768)]: {
      width: rem(30),
      height: rem(30),
    },
    [breakpoint(480)]: {
      width: rem(25),
      height: rem(25),
    },
  },
  stepNumber: {
    fontSize: rem(18),
    fontWeight: 'bold',
    [breakpoint(1200)]: {
      fontSize: rem(16),
    },
    [breakpoint(768)]: {
      fontSize: rem(14),
    },
    [breakpoint(480)]: {
      fontSize: rem(12),
    },
  },
  stepText: {
    fontSize: rem(22),
    flex: 1,
    fontFamily: 'Golos Text',
    fontWeight: '500',
    lineHeight: rem(24),
    [breakpoint(1200)]: {
      fontSize: rem(20),
    },
    [breakpoint(768)]: {
      fontSize: rem(18),
    },
    [breakpoint(480)]: {
      fontSize: rem(16),
    },
  },
  tallCard: {
    gridRow: 'span 2',
  },
  wideCard: {
    gridColumn: 'span 2',
    paddingRight: '35%',
    [breakpoint(1200)]: {
      paddingRight: '25%',
    },
    [breakpoint(768)]: {
      paddingRight: '15%',
      gridColumn: 'span 1',
    },
    [breakpoint(480)]: {
      paddingRight: '10%',
    },
  },
  imageContainer: {
    textAlign: 'right',
    position: 'relative',
    marginTop: rem(20),
    [breakpoint(1200)]: {
      textAlign: 'center',
      marginTop: rem(15),
    },
    [breakpoint(768)]: {
      textAlign: 'center',
      marginTop: rem(10),
    },
    [breakpoint(480)]: {
      textAlign: 'center',
      marginTop: rem(5),
    },
  },
  image: {
    width: rem(376),
    height: rem(140),
    position: 'absolute',
    bottom: 100,
    right: -50,
    zIndex: 1,
    [breakpoint(1200)]: {
      width: rem(320),
      height: rem(120),
      right: -40,
    },
    [breakpoint(768)]: {
      width: rem(210),
      height: rem(80),
      right: -20,
      top: -50,
    },
    [breakpoint(480)]: {
      width: rem(170),
      height: rem(70),
      right: 50,
      top: -30,
    },
  },
});
