import React from "react";
import { connect } from "react-redux";
import Article from "../model/Article";

const mapStateToProps = (state: { articles: any; }) => {
    return { articles: state.articles };
};

const ConnectedList = (props: {articles: Article[]}) => {
    return (<ul className="list-group list-group-flush">
        {props.articles.map((el: {
            id: string | number | undefined;
            title: React.ReactNode;
        }) => (<li className="list-group-item" key={el.id}>
            {el.title}
        </li>))}
    </ul>);
};

const List = connect(mapStateToProps)(ConnectedList);
export default List;