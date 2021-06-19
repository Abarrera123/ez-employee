import React from "react";
//this Col component offers us to convenience of being able to set a column's "size" prop instead of its className
//We can also omit the col- at the start of each Boostrap column class

function Col(props) {
    const size = props.size.split(" ").map(size => "col-"+size).join(" ");

    return(
        <div className={size}>
            {props.children}
        </div>
    );
}

export default Col;