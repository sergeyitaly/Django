import React from "react";
import { Container, Form } from "react-bootstrap";

function Filter () {

    return (

        <Container style={{width: "400px", paddingTop: "50px"}}>
            <Form>
                <h4>GENDER</h4>
                <div className="mb-3">
                    <Form.Check
                        label="Men"
                        name="group1"
                        type="checkbox"
                    />
                    <Form.Check
                        label="Women"
                        name="group1"
                        type="checkbox"
                    />
                </div>
                <hr style={{height: "2px", width: "100%", color: "#828C76"}} />
                <h4>TYPE</h4>
                <div className="mb-3">
                    <Form.Check
                        label="Insider wallets"
                        name="group1"
                        type="checkbox"
                    />
                    <Form.Check
                        label="Clutches"
                        name="group1"
                        type="checkbox"
                    />
                    <Form.Check
                        label="Port wallets"
                        name="group1"
                        type="checkbox"
                    />
                    <Form.Check
                        label="Bifold"
                        name="group1"
                        type="checkbox"
                    />
                    <Form.Check
                        label="Trifold"
                        name="group1"
                        type="checkbox"
                    />
                </div>
                <hr style={{height: "2px", width: "100%", color: "#828C76"}} />
                <h4>MATERIAL</h4>
                <div className="mb-3">
                    <Form.Check
                        label="Brown"
                        name="group1"
                        type="checkbox"
                    />
                    <Form.Check
                        label="Tan"
                        name="group1"
                        type="checkbox"
                    />
                    <Form.Check
                        label="Light Brown"
                        name="group1"
                        type="checkbox"
                    />
                    <Form.Check
                        label="Medium Brown"
                        name="group1"
                        type="checkbox"
                    />
                    <Form.Check
                        label="Dark Brown"
                        name="group1"
                        type="checkbox"
                    />
                </div>
            </Form>
        </Container>

    )

}

export default Filter;