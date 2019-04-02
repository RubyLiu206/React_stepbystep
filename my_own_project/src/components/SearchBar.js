import React from 'react';


class SearchBar extends React.Component{
    render(){
        return (
            <div class="ui vertical menu">
                <a class="teal item">
                    Date
                    <div class="ui teal left pointing label">1</div>
                </a>
                <a class="item">
                    Collection
                    <div class="ui label">51</div>
                </a>
                <a class="item active">
                    Conatct-Infor
                    <div class="ui label">1</div>
                </a>
                <div class="item">
                    <div class="ui transparent icon input">
                        <input type="text" placeholder="Search mail..." />
                        <i class="search icon"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;
