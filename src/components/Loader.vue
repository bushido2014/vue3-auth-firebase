<template>
  <div class="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>
<style scoped>
.lds-ring {
  display: block;
  position: relative;
  width: 60px;
  height: 60px;
  margin: auto;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 44px;
  height: 44px;
  margin: 7px;
  border: 7px solid #4f46e5;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #4f46e5 transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
