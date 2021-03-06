import React from 'react';
import css from'../search.css';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { List, ListItem } from "../Components/List";
import Recommendations  from '../pages/Recommendations'

class Search extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			query: '',
			results: {},
			loading: false,
			message: '',
			PlaydateResults: 0,
			OpenFacilities: 0,
		};

		this.cancel = '';
    }
    render() {
		return (
			<div>
			<nav class="navbar navbar-light bg-light">
<form class="form-inline">
<button class="btn btn-outline-success" type="button"><Link to="/">Home</Link></button>
<button class="btn btn-outline-success" type="button"><Link to="/login">Login</Link></button>
<button class="btn btn-outline-success" type="button"><Link to="/signup">Sign up</Link></button>
<button class="btn btn-outline-success" type="button"><Link to="/recommendations">Recommendations</Link></button>
<button class="btn btn-outline-success" type="button"><Link to="/searchPage">Search Page</Link></button>
<button class="btn btn-outline-success" type="button"><Link to="/recommendation-form">News Feed</Link></button>

</form>
</nav>
<List>
                {Recommendations.recommendations.map(recommendation => {
                  return (
                    <ListItem key={recommendation._id}>
                      <a href={"/recommendations/" + recommendation._id}>
                        <strong>
                          {recommendation.email} by {recommendation.Rec}
                        </strong>
                      </a>
                      {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
                    </ListItem>
                  );
                })}
              </List>
			<div className="container">
				
				<img  src="\images\logo.png"/>
				<h2 className="heading">Search what you need</h2>
				
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
						value=""
						id="search-input"
						placeholder="Search..."
					/>
					<i className="fa fa-search search-icon"/>
				</label>
				
			</div>
			</div>
			)
	}
}
 

export default Search