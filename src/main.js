import {sumTwo, sumThree} from "./math/addition";
import * as multi from "./math/multi";
import {users} from "./data/users";
import * as load from 'lodash';

const sum = (x, y) => {
    return x + y
};

let i = 1;

document.write("<div style=\"margin-left: 110px\">" + `${i++}. sum(1,4)=${sum(1, 4)}` + "</div>");
document.write("<div style=\"margin-left: 110px\">" + `${i++}. sumTwo(1,4)=${sumTwo(1, 4)}` + "</div>");
document.write("<div style=\"margin-left: 110px\">" + `${i++}. sumThree(1,4,2)=${sumThree(1, 4, 2)}` + "</div>");

document.write("<br/>");

document.write("<div style=\"margin-left: 110px\">" + `${i++}. multi.mTwo(1,4)=${multi.mTwo(1, 4)}` + "</div>");
document.write("<div style=\"margin-left: 110px\">" + `${i++}. multi.mThree(1,4,2)=${multi.mThree(1, 4, 2)}` + "</div>");

document.write("<br/>");
i = 1;
users.forEach(({user}) => {
    document.write("<div style=\"margin-left: 110px\">" + `${i++}. {user}=${user}` + "</div>");
});

document.write("<br/>");
i = 1;
users.forEach((user) => {
    document.write("<div style=\"margin-left: 110px\">" + `${i++}. user.user=${user.user} user.age=${user.age} ` + "</div>");
});

document.write("<br/>");
i = 1;
let subUsers = load.filter(users, {age: 36});
subUsers.forEach((x) => {
    document.write("<div style=\"margin-left: 110px\">" + `${i++}. user.user=${x.user} user.age=${x.age} ` + "</div>");
});


