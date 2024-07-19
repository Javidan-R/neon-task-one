import { Row } from 'antd';
import classNames from 'classnames';
import { useMemo } from 'react';
import useLocalization from '../../../../../assets/lang';
import { useFooterStyles } from './footer.style';
import TextSlider from '../../../../../pages/home/components/text-slider/text-slider.component';
import Paragraph from 'antd/es/typography/Paragraph';


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
      <TextSlider/>
      <footer className={footerClasses}>
        <Row className={classes.footerSm}>
      <Paragraph color='#313131'>
        {translate('footer')}
      </Paragraph>
        </Row>
      </footer>
    </div>
  );
};

export default FooterComponent;
