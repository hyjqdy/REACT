import { Component } from "react";

export default class CustomerRow extends Component {
       render() {
           let {id, firstName, lastName} = this.props.customer;
           return <div className="row">
               {firstName} &nbsp; {lastName} &nbsp;
               <button type="button" onClick={() => this.deleteRow(id)}>&times;</button>
           </div>
       } 

       deleteRow(id) {
           console.log("Customer Row", id);
           this.props.delEvent(id);
       }

}