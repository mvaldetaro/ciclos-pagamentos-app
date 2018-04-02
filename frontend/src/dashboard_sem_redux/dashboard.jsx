import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'
import Row from '../common/layout/row'

const BASE_URL = 'http://localhost:3003/api'

import axios from 'axios'

export default class Dashboard extends Component {

    constructor(props) {
        super(props)
        this.state = { credit: 0, debt:0 }
    }

    componentWillMount() {
        axios.get(`${BASE_URL}/billingCycles/summary`)
        .then(resp => this.setState(resp.data))
    }

    render() {
        const { credit, debt } = this.state
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão sem Redux' />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`R$ ${credit}`} text='Total de Créditos'/>
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`R$ ${debt}`} text='Total de Débitos'/>
                        <ValueBox cols='12 4' color='blue' icon='money' value={`R$ ${credit - debt}`} text='Valor Consolidado'/>
                    </Row>
                </Content>
            </div>
        )
    }
}
