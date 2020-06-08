import React from 'react';
import ReactDOM from 'react-dom';
import ListItems from './listitems';
import WishList from './Wish';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            wishItem:[],
            availItems:[],
            currentItem:{
                text:'',
                key:''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleInput(e){
        this.setState({
            currentItem:{
                text: e.target.value,
                key: Date.now()
            }
        })
    }

        addItem(e){
            e.preventDefault();
            const newItem = this.state.currentItem;
            if(newItem.text !== ""){
                const newItems=[...this.state.availItems, newItem];
                this.setState({
                    availItems: newItems,
                    currentItem: {
                        text:'',
                        key:''
                    }
                })
            }
        };

        moveToWishList = (item) => {
            const newItems = this.state.availItems.filter(i => (i.text !== i.text))
            const newWish = [...this.state.wishItem, item]
            this.setState({
                availItems: newItems,
                wishItem: newWish
            })
        };

        moveToAvailItem = (item) => {
            const removeItem = this.state.availItems.filter(i => (i.text !== i.text))
            const moveItem = [...this.state.availItems, item]
            this.setState({
                availItems: moveItem,
                wishItem: removeItem
            })
        };

        
        
    render() {
        return (
            <div className="WishListApp">
                <h1>
                    My Wish List
                </h1>
                <h2>
                    Available Items-
                    {this.state.availItems.length}
                </h2>
                <form id="additemlist" onSubmit={this.addItem}>
                    <input 
                        type="text" 
                        placeholder="Add Item"
                        value={this.state.currentItem.text}
                        onChange={this.handleInput} 
                    />
                    <button className="AddTo" >Add to Available</button>
                </form>
                <ListItems 
                    availItems = {this.state.availItems} 
                    moveToWishList = {this.moveToWishList}
                />
                <h2>
                    WishList- 
                    {this.state.wishItem.length}
                </h2>
                <WishList
                    availItems = {this.state.wishItem}
                    moveToAvailItem = {this.moveToAvailItem}
                />
            </div>
        );
    }
}

export default App;