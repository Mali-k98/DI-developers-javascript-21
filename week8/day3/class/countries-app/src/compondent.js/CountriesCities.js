import React from 'react';

class CountriesCities extends React.Component{
    constructor(){
        super();
        this.state={
        countries:[],
        cities:[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:4000/countries')
        .then(res=>res.json())
        .then(data=>{
            // console.log(data);
            this.setState({countries:data})
        })
    }

    onSelect=(e)=>{
        fetch(`http://localhost:4000/cities/${e.target.value}`)
        .then(res=>res.json())
        .then(data=>{
            this.setState({cities:data})
        })
        .catch(e=>{
            console.log(e);
        })
    }

    renderSelect(array){
        if(array.length === 0)
            return null
        return(
            <select >
            {
                countries.map((item,i)=>{
                    return<option value={item.country_id||item.city_id} key={i}>{item.country||item.city}</option>
                })
            }
        </select>
        )
    }
    
    render(){
        console.log('countries',this.state.countries);
        const {countries} = this.state
        
        return(
        <>
        {this.renderSelect(countries,this.onSelect)}
        {this.renderSelect(cities, null)}
        </>
        )
    }
}
export default CountriesCities