import React, {Component} from "react";
import {registerFn} from "../lib/commons";
import {Div} from "../lib/controls";

export default class HomePage extends Component<any, any> {
    stateUncheck: any;

    constructor(props: any) {
        super(props);
        registerFn(this.loadProducts, this);

    }

    componentWillUnmount() {
        this.stateUncheck();
    }

    async componentDidMount() {
        await this.loadProducts();
    }

    async loadProducts() {

    }

    render() {
        return <Div>{}</Div>
    }
}
