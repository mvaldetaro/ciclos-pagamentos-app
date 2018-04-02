import React, {Component} from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from "redux";

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'


class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Ciclo de Pagamento' small='Cadastro' />
                <Content>
                    Ciclos
                </Content>
            </div>
        )
    }
}

/*const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({
    getSummary
}, dispatch)*/

export default BillingCycle