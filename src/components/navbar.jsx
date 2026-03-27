import React from 'react'

const navbar = () => {
  return (
       <section class="row">
            <div class="col-md-12 bg-primary">
                {/* <!-- a nav with navbar content  --> */}
                <nav class="navbar navbar-expand-md bg-info">
                    <a href="/" class="navbar-brand text-danger">ALV Motors</a>
                    <button class="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- divsion contain the links  --> */}
                    <div class="collapse navbar-collapse" id="navbarcollapse">
                        <div class="navbar-nav">
                            <a href="/" class="nav-link">Home</a>
                            <a href="/addproduct" class="nav-link">Add product</a>
                            <a href="/signin" class="nav-link">Sign in</a>
                            <a href="/signup" class="nav-link">Sign Up</a>
                        </div>
                    </div>
                </nav>
            </div>

        </section>
   
  )
}

export default navbar