import React from 'react'

class Books extends React.Component{
    constructor(){
        super()
        this.state={
        title:'',
        author:'',
        genre:'',
        year:''
        }
    }
    
    getTitle=(e)=>{this.setState({title:e.target.value})}
    getAuthor=(e)=>{this.setState({author:e.target.value})}
    getGenre=(e)=>{this.setState({genre:e.target.value})}
    getYear=(e)=>{this.setState({year:e.target.value})}

    onSub=(e)=>{
        const {title} = this.state
        const {author} = this.state
        const {genre} = this.state
        const {year} = this.state
        let obj={
            title,
            author,
            genre,
            year
        }
        e.preventDefault();
        console.log(obj);
    }
    render(){
    return (
        <div>
            <form >
                <h1>new book</h1>
                Title
                <input type='text' onChange={this.getTitle}/><br></br>
                Author
                <input type='text' onChange={this.getAuthor}/><br></br>
                Genre
                <input type='text' onChange={this.getGenre}/><br></br>
                Year Published
                <input type='text' onChange={this.getYear}/><br></br>
                <button onClick={this.onSub} type='submit'>Submit</button>
            </form>
        </div>
    )
    }
}
export default Books
