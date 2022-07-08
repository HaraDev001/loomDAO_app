import React from 'react';
import { Container, Row, Button} from 'react-bootstrap';
import { OverlayContainer } from '../../containers'

export default function Components() {
  return (
    <Container fluid className="bg-hl-primary py-5">
        <Container>
          <Row className="d-flex content-justify-center align-items-center">
            <h1 className="text-center mb-5"> Typography </h1>
            <h1> H1 Roboto ExtraBold 60 </h1>
            <h2> H2 Roboto ExtraBold 36 </h2>
            <h3> H3 Roboto ExtraBold 24 </h3>
            <h4> H4 Roboto Regular 18 </h4>
            <h5> H5 Roboto SemiBold 18 </h5>
            <h6> H6 Roboto Semibold 16 </h6>
            <h6 className="h7"> H7 Roboto regular 14 </h6>
            <h6 className="h8"> H8 Roboto ExtraBold 14 </h6>
            <h6 className="h9"> H9 Roboto ExtraBold 12 </h6>
          </Row>
          <Row className="d-flex flex-column content-justify-center align-items-center">
            <h1 className="text-center mb-5"> Buttons </h1>
            <Button style={{width: "5.5rem", height: "2.815rem"}} variant="hl-cta mb-3" size="sm">cta small</Button> {' '}
            <Button style={{width: "16rem",  height: "3.125rem"}} variant="hl-cta mb-3">Cta Normal</Button> {' '}
            <Button style={{width: "21.5rem", height: "3.125rem"}} variant="hl-cta mb-3" size="lg">Cta Large</Button> {' '}
            <Button style={{width: "5.5rem", height: "2.815rem"}} variant="hl-primary btn-outline-hl-light-mild text-hl-light mb-3" size="sm">cta small</Button> {' '}
            <Button style={{width: "16rem",  height: "3.125rem"}} variant="hl-primary btn-outline-hl-light-mild text-hl-light mb-3">Cta Normal</Button> {' '}
            <Button style={{width: "21.5rem", height: "3.125rem"}} variant="hl-primary btn-outline-hl-light-mild text-hl-light mb-3" size="lg">Cta Large</Button> {' '}
          </Row>
        </Container>
        <OverlayContainer 
          className="d-flex flex-column content-justify-center bg-hl-primary align-items-center"
          circles={[
            { 
              class: "circle-one",
              style: {
                width: "15rem",
                height: "15rem",
                transform: "translateY(25rem)"
              } 
            },

          ]}
        >
        <h1 className="text-center mb-5"> Overlay </h1>
        <p className="text-muted"> loremFugiat eiusmod voluptate dolor dolor irure sit ex laborum est duis consequat. Lorem pariatur nulla occaecat esse nostrud eu sunt in nulla ut non sunt et quis. Minim eu esse occaecat labore consectetur occaecat aute qui sit occaecat occaecat ea enim consequat. Veniam elit laboris eu deserunt veniam proident proident anim ad exercitation et magna irure. Commodo pariatur pariatur anim mollit exercitation exercitation pariatur qui nisi tempor qui eiusmod laboris. Ut in dolor laborum ipsum elit deserunt incididunt elit ea.</p>
        
        <p className="text-muted" >Deserunt sint nostrud excepteur proident do consectetur in tempor. Fugiat tempor sint irure minim qui. Consequat culpa id sint ullamco dolore. Consectetur nisi sint laboris et id pariatur anim ipsum cupidatat occaecat aliquip. Reprehenderit mollit elit proident sunt cupidatat ullamco consectetur deserunt ipsum qui est qui sint nisi. Tempor aliqua amet tempor elit minim veniam aliquip.</p>
        
        <p className="text-muted" >Do anim dolor consequat laborum cupidatat ea pariatur duis laboris id. Deserunt commodo duis do consectetur velit ex in aute consequat qui pariatur. Anim eu dolore nostrud sint fugiat adipisicing proident eiusmod fugiat adipisicing mollit quis ea. Consectetur mollit nisi occaecat ipsum aute Lorem incididunt sunt adipisicing quis irure ullamco nostrud do.</p>
        
        <p className="text-muted" >Lorem voluptate magna sunt aute fugiat nostrud. Ea exercitation ut sunt ipsum adipisicing veniam ullamco est cupidatat cupidatat velit eiusmod. Excepteur culpa dolore irure laboris pariatur non commodo sunt occaecat pariatur. </p>
      </OverlayContainer>
    </Container>
  )
}
