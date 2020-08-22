import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

   function RenderDish({dish}) {
        // make sure the selected dish is an existing dish
       
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
       
    
    function RenderComments({comments}) {
         //Get the comments array using props keyword    
            const coms = comments.map((com) => {
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


    const  DishDetails = (props) => {
        if (props.dish) {
            return (
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.dish.comments} />
                    </div>
                </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

export default DishDetails;

