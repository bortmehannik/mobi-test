<template>
  <div id="app">
    <h1><b>Web</b> App</h1>
    <router-view/>
    <div class="footer">
      <a href="#"><svg id="Capa_1" style="enable-background:new 0 0 60 60;" version="1.1" viewBox="0 0 60 60" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M0,8.5v2.291v38.418V51.5h60v-2.291V10.791V8.5H0z M36.625,30.564l-5.446,5.472c-0.662,0.615-1.698,0.614-2.332,0.026  l-5.473-5.498l0.048-0.047L3.647,10.5h52.719L36.577,30.518L36.625,30.564z M20.524,30.533L2,48.355V11.923L20.524,30.533z   M21.934,31.95l5.523,5.549c0.709,0.661,1.619,0.993,2.533,0.993c0.923,0,1.85-0.339,2.581-1.02l5.496-5.522L56.304,49.5H3.686  L21.934,31.95z M39.477,30.534L58,11.922v36.433L39.477,30.534z"/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg> Написать в поддержку</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
body
  font-family: 'Roboto', sans-serif
h1
  margin: 0
  font-weight: 100
  font-size: 50px
  b
    letter-spacing: 3px

h2
  margin: 70px 0 35px 0
  font-size: 22px

#app
  width: 1170px
  margin: 0 auto
  padding-top: 40px

form
  display: flex
  flex-direction: column
  width: 35%
  label
    font-size: 14px
    margin-bottom: 10px
  input, select
    margin-bottom: 30px
    height: 40px
    font-size: 15px
    padding: 0 15px
    border: 2px solid #eceff2
    -webkit-border-radius: 5px
    -moz-border-radius: 5px
    border-radius: 5px
    background: #ffffff
  .btn
    background: #ce7eff
    background: -moz-linear-gradient(left, #ce7eff 0%, #b266fe 100%)
    background: -webkit-linear-gradient(left, #ce7eff 0%,#b266fe 100%)
    background: linear-gradient(to right, #ce7eff 0%,#b266fe 100%)
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ce7eff', endColorstr='#b266fe',GradientType=1 )
    height: 45px
    border: none
    color: #ffffff
    text-transform: uppercase
    font-size: 13px
    font-weight: 600
    -webkit-border-radius: 100px
    -moz-border-radius: 100px
    border-radius: 100px
    cursor: pointer

.links-block
  display: flex
  flex-direction: column
  margin-top: 70px
  a
    color: #1960b0
    text-decoration: none
    margin-bottom: 30px
    font-size: 14px

.footer
  margin: 50px 0 40px 0
  a
    display: flex
    color: #b6b8b9
    text-decoration: none
    font-size: 13px
    align-items: center
    svg
      width: 20px
      fill: #b6b8b9
      margin-right: 15px

@media (max-width: 1200px)
  #app
    width: 768px
  form
    width: 50%

@media (max-width: 780px)
  #app
    width: 500px
  form
    width: 100%

@media (max-width: 520px)
  #app
    width: 100%
</style>
