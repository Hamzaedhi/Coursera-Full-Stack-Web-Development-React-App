import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetails extends Component {
    
    constructor(props) {
        super(props);

    }

    renderDish(dish) {
        // make sure the selected dish is an existing dish
        if(dish != null) 
        {
              return (
                  <Card>
                       <CardImg width="100%" src={dish.image} alt={dish.name} />
                       <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>                  
                       </CardBody>
                  </Card>
              )
        }
        else 
        {
            return null;
        }
    }
     renderComments(dish) {
         //Get the comments array using props keyword    
        if (dish!= null){
            const coms = dish.comments.map((com) => {
                let date = new Intl.DateTimeFormat('en-US', {
                    year:'numeric',
                    month: 'short',
                    day: '2-digit'
                }).format(new Date(Date.parse(com.date)))
               

                return (
                        <ul key={com.id} className="list-unstyled">
                            <li className="comment">{com.comment}<br/><br/></li>
                            <li className="author">-- {com.author}, {date}</li>
                        </ul>          
                    );
                })

            return (         
                <div className="container">
                    <div className="row"> 
                        <h4>Comments</h4>
                          <div>{coms}</div>  
                    </div>
                </div>

            );
        }
        else {
            return(
                <div></div>
            )
        }

         
     }


    render() {
        return (
        <div className="container">
                <div className="row">    
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.selectedDish)}
                    </div>
                </div>

        </div>
        )
    }
}
export default DishDetails;

