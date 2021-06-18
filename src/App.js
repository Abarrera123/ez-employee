import React from "react";
import EmployeeCard from "./components/EmployeeCard";
import SearchForm from "./components/SearchForm";
import Wrapper from "./components/Wrapper";
import Col from "./components/Col";
import API from "./utils/API"

class App extends React.Component{
  state = {
    employees:[],
    search:" "
  };

  componentDidMount() {
    API.search().then((res) => { console.log(res);
    this.setState({
      employees: res.data.results.map((e, i) => ({
        firstName: e.name.first,
        lastName: e.name.last, 
        picture: e.picture.large,
        email: e.email,
        phone: e.phone,
        city: e.location.city,
        key: 1
      })),
    })
  })
  .catch((err) => console.log(err));
}

refreshPage(){
  window.location.reload(false);
}

searchEmployee = (filter) =>{
  console.log('Search', filter);
  const filteredList = this.state.employees.filter((employee) =>{
    //merge data together, and check for employee
    let values = Object.values(employee).join('').toLocaleLowerCase;
    return values.indexOf(filter.toLocaleLowerCase()) !== -1;
  });
  //updating the employee list with the filteredList
  this.setState({employees: filteredList});
};

handleInputChange = (e) =>{
  this.setState({
    [e.target.name]: e.target.value,
  });
  console.log('Handle', this.state.search)
}

handleFormSubmit = (e) => {
  e.preventDefault();
  console.log('Button Clicked', this.state.search, e);
  this.searchEmployee(this.state.search);
};

render(){
  return(
    <Wrapper>
      <div className = "container">
        <div className="row">
          <Col size="md-4">
            <h2>EZ-Employee</h2>
            <SearchForm
            value ={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
        </div>

        <div className ="row">
          <Col size="md-12">
            <table className="table">
              <thread>
                <tr>Photo</tr>
                <tr>First Name</tr>
                <tr>Last Name</tr>
                <tr>Email</tr>
                <tr>Phone</tr>
                <tr>city</tr>
              </thread>
            </table>
            {[...this.state.employees].map((item) =>{
              <EmployeeCard
              picture={item.picture}
              firstName={item.firstName}
              lastName={item.lastName}
              email={item.email}
              phone={item.phone}
              city={item.city}
              key={item.key}
              />
            })}
          </Col>
        </div>
      </div>
    </Wrapper>
  )
}
}

export default App; 