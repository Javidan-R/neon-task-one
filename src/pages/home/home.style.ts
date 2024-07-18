
import { createUseStyles, Styles } from 'react-jss';
import colors from '../../assets/styles/abstracts/color';
import { rem } from '../../assets/styles/abstracts/functions';
import { breakpoint } from '../../assets/styles/abstracts/mixins';
import sizes from '../../assets/styles/abstracts/sizes';

const styles:Styles = {
title: {
    color:colors.redMain,
    fontWeight:700,
    fontSize:rem(62),
    lineHeight:rem(95),
    width:sizes.full,
    maxWidth:rem(550),
    height:rem(200),
    [breakpoint(992)]:  {
        textAlign:'center',
        fontSize:rem(55)
    },
    [breakpoint(390)]: {
        fontSize:rem(36),
        textAlign:'left',
        lineHeight:rem(47),
        height:'auto'
    }
},
playBtn: {
position:'absolute',
left:rem(10),
bottom:rem(10),
cursor:'pointer',
[breakpoint(390)]: {
    display:'none'
}
},
imageContainer: {
position:'relative'
},
video: {
    maxWidth:rem(1028),
    width:sizes.full,
    margin:0 + ' auto',
},
text: {
    lineHeight:rem(22),
    marginBottom:rem(30),
    [breakpoint(992)]:  {
        flexDirection:'column',
        alignItems:'center',
        textAlign:'center'
    }
},
bannerImage: {
    width:rem(1028),
    margin:0 + ' auto',
},
containerSm: {
    maxWidth:rem(1240)
},
bannerBelowText: {
    textAlign:'center',
    maxWidth:rem(1028),
    margin:0 + ' auto',
},
banner: {
    paddingTop:rem(50),
    marginTop:rem(30),
    backgroundColor:colors.footerBg,
    [breakpoint(390)]: {
        paddingTop:rem(0),
        marginTop:rem(0)
    }
}, 
bannerTop: {
    [breakpoint(992)]:  {
    flexDirection:'column',
    alignItems:'center'
    },
    [breakpoint(390)]: {
        gap:rem(14) + '!important'
    }
},
bannerAbout: {
    marginTop:rem(65),
    maxWidth:rem(1028),
    width:sizes.full,
    margin:0 + ' auto',
    [breakpoint(992)]:  {
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    [breakpoint(390)]: {
        marginTop:rem(10)
    },
    '& img': {
        maxWidth:rem(498),
        width:sizes.full,
        height:rem(543),
        objectFit:'cover',
        marginBottom:rem(-100),
        marginTop:rem(20),
        [breakpoint(390)]: {
            height:rem(364)
        }
    },
    '& h2': {
        color:colors.redMain,
        fontSize:rem(22)
    },
    '& h1': {
        color:colors.redMain,
        fontSize:rem(41)
    },
    '& span': {
        color:colors.redMain,
        borderBottom:rem(2) + ' solid ' + colors.redMain,
        paddingBottom:rem(6)
    },    
},
propertyLoan: {
    marginTop:rem(150),
    [breakpoint(992)]:  {
        flexDirection:'column',
        alignItems:'center',
        gap:rem(20)
    },
    [breakpoint(390)]: {
        gap:rem(8) + '!important'
    }
},
propertyLoanTitle: {
    color:colors.textMain,
    fontSize:rem(44),
    width:rem(300),
   
},
propertyLoanTitleSecondary: {
    color:colors.redMain,
    fontSize:rem(18),
    fontWeight:700
},
loanCalculator: {
    backgroundColor:colors.footerBg,
    width:'100%',
    maxWidth:rem(1000),
    marginTop:rem(100),
    paddingLeft:'30%',
    marginLeft:'auto',
    position:'relative',
    [breakpoint(1187)]: {
        paddingLeft:'35%',
    },
    [breakpoint(992)]:  {
        padding:rem(0),
        flexDirection:'column',
        alignItems:'center',
        paddingTop:rem(50),
    },
    [breakpoint(390)]: {
        paddingTop:rem(10),
        marginTop:rem(30)
    }
},
loanText: {
    width:rem(414), 
    color:colors.textMain,
    [breakpoint(1187)]: {
        width:rem(300)
    },
    [breakpoint(768)]: {
        width:'auto'
    }
},
loanTitleSecondary: {
    color:colors.redMain,
    fontSize:rem(18),
    fontWeight:700
},
loanTitle: {
    color:colors.textMain,
    fontSize:rem(44),
    width:rem(374),
    [breakpoint(768)]:  {
        width:'auto'
    }
},
rangeInput: {
    width:rem(190),
    marginTop:rem(-5),
    [breakpoint(768)]:  {
        width:'auto'
    }
},
loanResult: {
    color:colors.redMain,
    fontSize:rem(20),
},
loanCalculatorInfo: {
    position:'absolute',
    left:'-15%',
    top:rem(100),
    [breakpoint(992)]:  {
        position:'relative',
        left:'auto',
        top:'auto',
    },
    [breakpoint(1187)]: {
        left:'0%'
    }
},
applyBtn: {
    width:rem(320),
    marginRight:rem(0)
},
inputCredentials: {
    maxWidth:rem(320),
    width:sizes.full
},
inputCredentialsContainer: {
    [breakpoint(992)]:  {
        flexDirection:'column'
    }
},
flexColMobile: {
    [breakpoint(992)]:  {
    flexDirection:'column',
    alignItems:'center',
    gap:rem(20) + '!important'
}
}
};
export const useHomePageStyles = createUseStyles(styles);