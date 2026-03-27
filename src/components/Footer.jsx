import React from 'react'

const Footer = () => {
  return (
    <div>
         <section class="row bg-warning  p-3">
            {/* <!-- child 1  --> */}
            <div class="col-md-4">
                <h2 class="text-center text-white">About us</h2>
                <p class="text-white">Shop with us to experience best prices of quality and long lasting products</p>
            </div>

            {/* <!-- child 2  --> */}
            <div class="col-md-4">
                <h2 class="text-center text-white">contact us</h2>
                <form action="">
                    <input type="email" placeholder="enter your email" class="form-control"/> <br/><br/>
                    <textarea name="" id="" class="form-control" placeholder="leave a comment"></textarea><br/><br/>
                    <input type="submit" value="send message" class="btn btn-outline-danger"/>
                </form>
            </div>
            {/* <!-- child 3  --> */}
            <div class="col-md-4 text-center text-white">
                <h2>Stay connected</h2>
                <a href="https://facebook.com">
                    <img src="images/fb.png" alt="fb"/>
                </a>
                <a href="https://instagram.com">
                    <img src="images/in.png" alt="ig"/>
                </a>
                <a href="https://x.com">
                    <img src="images/x.png" alt="twitter"/>
                </a>
                <p>The numbers don't lie. stay connected for more information</p>
            </div>

        </section>
    </div>
  )
}

export default Footer