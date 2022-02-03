import React from "react";

import { Row, Card, Col , Container, CardImg} from "react-bootstrap";

import LeatherWallets from "../Img/CatalogImages/CatalogLeatherWallets.png"
import LeatherBags from "../Img/CatalogImages/CatalogLeatherBags.png"
import LeatherBelts from "../Img/CatalogImages/CatalogLeatherBelts.png"
import LeatherBracelets from "../Img/CatalogImages/CatalogLeatherBracelets.png"
import LeatherKedges from "../Img/CatalogImages/CatalogLeatherKedges.png"
import LeatherNotes from "../Img/CatalogImages/CatalogLeatherNotes.png"
import LeatherPhoneCases from "../Img/CatalogImages/CatalogLeatherPhoneCases.png"
import LeatherWatchStraps from "../Img/CatalogImages/CatalogLeatherWatchStraps.png"
import LeatherAccessories from "../Img/CatalogImages/CatalogLeatherAccessories.png"
import { Link } from "react-router-dom";

function CatalogPlates () {

    return (

        <Container fluid className="">
              <Container className="py-5">
                  <Row xs={2}  md={2} xl={3}  className="g-5">
                    <Col>
                      <Link to="wallets">
                          <Card className="overflow-hidden" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                              <CardImg className="d-block w-100" variant="center" src={LeatherWallets}/>
                              <Card.ImgOverlay>
                                  <Card.Title>Wallets</Card.Title>
                              </Card.ImgOverlay>
                          </Card>
                      </Link>
                    </Col>
                    <Col>
                      <Link to="bags">
                          <Card className="overflow-hidden" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                              <CardImg className="d-block w-100" variant="center" src={LeatherBags}/>
                              <Card.ImgOverlay>
                                  <Card.Title>Bags</Card.Title>
                              </Card.ImgOverlay>
                          </Card>
                      </Link>
                    </Col>
                    <Col>
                      <Link to="belts">
                          <Card className="overflow-hidden" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                              <CardImg className="d-block w-100" variant="center" src={LeatherBelts}/>
                              <Card.ImgOverlay>
                                  <Card.Title>Belts</Card.Title>
                              </Card.ImgOverlay>
                          </Card>
                      </Link>
                    </Col>
                    <Col>
                      <Link to="keyKedges">
                          <Card className="overflow-hidden" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                              <CardImg className="d-block w-100" variant="center" src={LeatherKedges}/>
                              <Card.ImgOverlay>
                                  <Card.Title>Key Kedges</Card.Title>
                              </Card.ImgOverlay>
                          </Card>
                      </Link>
                    </Col>
                    <Col>
                      <Link to="watchStraps">
                          <Card className="overflow-hidden" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                              <CardImg className="d-block w-100" variant="center" src={LeatherWatchStraps}/>
                              <Card.ImgOverlay>
                                  <Card.Title>Watch Straps</Card.Title>
                              </Card.ImgOverlay>
                          </Card>
                      </Link>
                    </Col>
                    <Col>
                      <Link to="phoneCases">
                          <Card className="overflow-hidden" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                              <CardImg className="d-block w-100" variant="center" src={LeatherPhoneCases}/>
                              <Card.ImgOverlay>
                                  <Card.Title>Phone Cases</Card.Title>
                              </Card.ImgOverlay>
                          </Card>
                      </Link>
                    </Col>
                    <Col>
                      <Link to="bracelets">
                          <Card className="overflow-hidden" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                              <CardImg className="d-block w-100" variant="center" src={LeatherBracelets}/>
                              <Card.ImgOverlay>
                                  <Card.Title>Leather Bracelets</Card.Title>
                              </Card.ImgOverlay>
                          </Card>
                      </Link>
                    </Col>
                    <Col>
                      <Link to="leatherFieldNotes">
                          <Card className="overflow-hidden" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                              <CardImg className="d-block w-100" variant="center" src={LeatherNotes}/>
                              <Card.ImgOverlay>
                                  <Card.Title>Leather Field Notes</Card.Title>
                              </Card.ImgOverlay>
                          </Card>
                      </Link>
                    </Col>
                    <Col>
                      <Link to="accessories">
                          <Card className="overflow-hidden" style={{border: "none", borderRadius: "1rem", background: "none"}}>
                              <CardImg className="d-block w-100" variant="center" src={LeatherAccessories}/>
                              <Card.ImgOverlay>
                                  <Card.Title>Accessories</Card.Title>
                              </Card.ImgOverlay>
                          </Card>
                      </Link>
                    </Col>
                  </Row>
              </Container>
          </Container>

    )

}

export default CatalogPlates;