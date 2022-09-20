import { keyframes } from "@mui/system"

export const moveRight = keyframes`
0% {
  transform: translateX(0%);
},
10% {
  transform: translateX(5%);
},
20% {
  transform: translateX(10%);
},
25% {
  transform: translateX(12.5%);
  margin-left: 7.5px;
  margin-right: 7.5px;
},
30% {
  transform: translateX(15%);
},
40% {
  transform: translateX(20%);
},
50% {
  transform: translateX(25%);
},
60% {
  transform: translateX(20%);
},
70% {
  transform: translateX(15%);
  margin-left: 0;
  margin-right: 0;
},
75% {
  transform: translateX(12.5%);
  margin-left: 0;
  margin-right: 0;
},
80% {
  transform: translateX(10%);
},
90% {
  transform: translateX(5%);
},
100% {
 transform: translateX(0%);
  margin-left: 5px;
  margin-right: 5px;
 }
`

export const moveLeft = keyframes`
0% {
  transform: translateX(0%);
  margin-left: 0;
  margin-right: 0;
},
10% {
  transform: translateX(-5%);
},
20% {
  transform: translateX(-10%);
},
25% {
  transform: translateX(-12.5%);
  margin-left: 7.5px;
  margin-right: 7.5px;
},
30% {
  transform: translateX(-15%);
},
40% {
  transform: translateX(-20%);
},
50% {
  transform: translateX(-25%);
},
60% {
  transform: translateX(-20%);
},
70% {
  transform: translateX(-15%);
  margin-left: 0;
  margin-right: 0;
},
75% {
  transform: translateX(-12.5%);
  margin-left: 0;
  margin-right: 0;
},
80% {
  transform: translateX(-10%);
},
90% {
  transform: translateX(-5%);
},
100% {
 transform: translateX(0%);
  margin-left: 5px;
  margin-right: 5px;
 }
`

export const popOutandIn = keyframes`
0% {
    transform: scale(1.0),
},
10% {
    transform: scale(1.04)
},
20% {
    transform: scale(1.08)
},
30% {
    transform: scale(1.12)
},
40% {
    transform: scale(1.16)
},
50% {
    transform: scale(1.2)
},
60% {
    transform: scale(1.18)
},
70% {
    transform: scale(1.16)
},
80% {
    transform: scale(1.14)
},
90% {
    transform: scale(1.12)
},
100% {
    transform: scale(1.1)
}
`
