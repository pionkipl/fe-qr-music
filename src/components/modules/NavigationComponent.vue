<template>
  <nav class="nav">
    <div class="container nav-container">
      <div class="row">
        <div class="col-12">
          <div class="navigation">
            <router-link :to="{name: 'home'}">
              <picture>
                <source media="(max-width: 767px)" class="navigation__logo" srcset="@/img/logo-small.png"/>
                <img class="navigation__logo" src="@/img/logo.svg" alt="logo">
              </picture>
            </router-link>
            <ul class="navigation__menu">
              <li class="navigation__link"><router-link :to="{name: 'home'}">Home</router-link></li>
              <li class="navigation__link"><router-link :to="{name: 'form'}">Add Song</router-link></li>
              <li class="navigation__link"><router-link :to="{name: 'history'}">History</router-link></li>
              <li class="navigation__link"><router-link :to="{name: 'electricity'}">El</router-link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationComponent"
}
</script>

<style scoped lang="scss">
 .nav-container {
   @media screen and (max-width: 767px) {
     padding: 0;
   }
 }
 .nav {
   position: fixed;
   width: 100%;
   top: 0;
   left: 0;
   background-color: #fff;
   padding: 15px 0 0 0;
   z-index: 100;

   @media screen and (max-width: 767px) {
     width: 60px;
     height: 100%;
     right: 0;
     left: auto;
   }
   .navigation {
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin-bottom: -1px;
     overflow: hidden;

     @media screen and (max-width: 767px) {
       flex-direction: column;
     }

     &__logo {
       max-width: 150px;
       width: 100%;
       position: relative;
       bottom: 5px;

       @media screen and (max-width: 767px) {
         max-width: 40px;
         margin-bottom: 40px;
       }
     }

     &__menu {
       padding-left: 0;
       list-style-type: none;
       display: flex;
       align-items: center;
       margin-bottom: 0;

       @media screen and (max-width: 767px) {
         flex-direction: column;
       }
     }

     &__link {
       font-size: 2rem;

       @media screen and (max-width: 767px) {
         transform: rotate(90deg);
         margin-bottom: 90px;
       }

        &:not(:last-child) {
          margin-right: 20px;

          @media screen and (max-width: 767px) {
            margin-right: 0;
          }
        }

       &:hover {
         a {
           background-color: $color-secondary;
           transform: translateY(2px);

           @media screen and (max-width: 767px) {
             transform: translateY(15px);
           }
         }
       }

       a {
         text-decoration: none;
         padding: 10px 30px;
         border-top-left-radius: 10px;
         border-top-right-radius: 10px;
         background-color: $color-third;
         color: #fff;
         position: relative;
         display: block;
         transform: translateY(12px);
         transition: 0.3s all;

         @media screen and (max-width: 767px) {
           padding: 10px 30px 30px 30px;
           transform: translateY(25px);
           width: max-content;
         }

         &.router-link-active {
           transform: translateY(2px);
           background-color: $color-secondary;

           @media screen and (max-width: 767px) {
             transform: translateY(15px);
           }
         }
       }
     }
   }
 }
</style>
