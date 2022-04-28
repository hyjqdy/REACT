import React, {Component} from 'react';
import CustomerRow from './CustomerRow';

export default class CustomerList extends Component {
    state = {
        "customers" :[{
            "id": 1,
            "firstName": "Rachel",
            "lastName": "Green ",
            "gender": "female",
            "address": "Blore"
        },
        {
            "id": 2,
            "firstName": "Chandler",
            "lastName": "Bing",
            "gender": "male",
            "address": "West Street"
        },
        {
            "id": 3,
            "firstName": "Joey",
            "lastName": "Tribbiani",
            "gender": "male",
            "address": "Kattegat"
        },
        {
            "id": 4,
            "firstName": "Monica",
            "lastName": "Geller",
            "gender": "female",
            "address": "some address"
        },
        {
            "id": 5,
            "firstName": "Ross",
            "lastName": "Geller",
            "gender": "male",
            "address": "some address "
        },
        {
            "id": 6,
            "firstName": "Phoebe",
            "lastName": "Buffay",
            "gender": "female",
            "address": "some address"
        }
    ],
    };
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.state.customers.map(c => <CustomerRow customer={c} key={c.id} delEvent={(id) => this.deleteCustomer(id)}/ >)
                }
            </div>
        );
    }

    deleteCustomer(id) {
        let custs = this.state.customers.filter(c => c.id !== id);
        // state and props are immutable
        // this.state.customers = custs; // wrong
        // update the state ==> triggers reconcillation
        this.setState({
            customers:custs
        }, () => console.log("deleted !!!"));

        // don't expect data change result here this.state.customers might still show old data
    }
}

