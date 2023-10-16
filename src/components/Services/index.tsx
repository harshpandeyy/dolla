import { Component } from 'react';
import Icon1 from '../../images/stars.png'
import Icon2 from '../../images/pen.png'
import Icon3 from '../../images/hero.png'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './ServicesElements'

export default class index extends Component {
  render() {
    return (
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Reduce expenses</ServicesH2>
                <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
            </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>You can access our platform anywhere in the world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>We help reduce your fees and increase your overall revenue.</ServicesP>
                </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    )
  }
}
