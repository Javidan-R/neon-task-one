import { Col, Flex, Row, Typography } from 'antd';
import classNames from 'classnames';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../../../../../assets/images/icons/logo';
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '../../../../../assets/images/icons/socials';
import useLocalization from '../../../../../assets/lang';
import { environment } from '../../../../configs/app.config';
import { useFooterStyles } from './footer.style';
import { Routes } from '../../../../../router/routes';


const FooterComponent = () => {
  const classes = useFooterStyles();
  const translate = useLocalization();

  const footerClasses = useMemo(
    () =>
      classNames({
        [classes.footer]: true,
        'pt-10': true,
      }),
    [classes.footer]
  );


  return (
    <div className={classes.footerContainer}>
      <footer className={footerClasses}>
        <Row className={classes.footerSm}>
        {translate('footer')}
        </Row>
      </footer>
    </div>
  );
};

export default FooterComponent;
