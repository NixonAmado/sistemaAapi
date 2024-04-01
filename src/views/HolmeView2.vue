<template>
    <div class="home">
      <section
        class="background-radial-gradient h-100 overflow-hidden position-relative"
      >
        <div class="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div class="row gx-lg-5 align-items-center mb-5">
            <div class="col-lg-6 mb-5 mb-lg-0 d-none d-lg-block" style="z-index: 10">
              <h1
                class="my-5 display-5 fw-bold ls-tight"
                style="color: hsl(218, 81%, 95%)"
              >
                The best offer <br />
                <span style="color: hsl(218, 81%, 75%)">for your business</span>
              </h1>
              <p
                class="mb-4 opacity-70"
                style="color: hsl(218, 81%, 85%)"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>
  
            <div class="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div class="position-absolute top-0 end-0">
                <div
                  id="radius-shape-1"
                  class="position-absolute rounded-circle shadow-5-strong"
                ></div>
                <div
                  id="radius-shape-2"
                  class="position-absolute shadow-5-strong"
                ></div>
              </div>
  
              <div class="card bg-glass">
                <div class="card-body px-4 py-5 login-vh px-md-5">
                  <!-- Pills navs -->
                  <ul
                    class="nav nav-pills nav-justified mb-3"
                    id="ex1"
                    role="tablist"
                  >
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link active"
                        id="pills-home-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-login"
                        type="button"
                        role="tab"
                        aria-controls="pills-home"
                        aria-selected="true"
                      >
                        Login
                      </button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button
                        class="nav-link"
                        id="pills-register-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-register"
                        type="button"
                        role="tab"
                        aria-controls="pills-profile"
                        aria-selected="false"
                      >
                        Register
                      </button>
                    </li>
                  </ul>
                  <!-- Pills navs -->
  
                  <!-- Pills content -->
                  <div class="tab-content">
                    <div
                      class="tab-pane fade show active"
                      id="pills-login"
                      role="tabpanel"
                      aria-labelledby="pills-home-tab"
                    >
                      <form>
                        <!-- Email input -->
                        <div class="form-outline mb-4">
                          <label
                            class="form-label"
                            for="loginEmail"
                          >Email or username</label>
                          <input
                            type="text"
                            id="loginEmail"
                            class="form-control"/>
                        </div>
  
                        <!-- Password input -->
                        <div class="form-outline mb-4">
                          <label
                            class="form-label"
                            for="loginPassword"
                          >Password</label>
                          <input
                            type="password"
                            id="loginPassword"
                            class="form-control"
                          />
  
                        </div>
  
                        <!-- 2 column grid layout -->
                        <div class="row mb-4">
                          <div class="col-md-6 d-flex justify-content-center">
                            <!-- Checkbox -->
                            <div
                              class="form-check mb-3 mb-md-0"
                            >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value
                                id="loginRemember"
                                checked
                              />
                              <label
                                class="form-check-label"
                                for="loginRemember"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
  
                          <div class="col-md-6 d-flex justify-content-center">
                            <!-- Simple link -->
                            <a
                              href="#!"
                            >
                              Forgot password?
                            </a>
                          </div>
                        </div>
  
                        <!-- Submit button -->
                        <button
                          type="button"
                          id="login-btn"
                          class="btn btn-primary btn-block mb-4"
                        >
                          Sign in
                        </button>
  
                        <!-- Register buttons -->
  
                      </form>
                    </div>
  
                    <div
                      class="tab-pane fade"
                      id="pills-register"
                      role="tabpanel"
                      aria-labelledby="pills-register-tab"
                    >
                      <form>
                        <!-- Name input -->
                        <div class="form-outline mb-4">
                          <label
                            class="form-label"
                            for="registerName"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="registerName"
                            class="form-control"
                          />
                        </div>
  
                        <!-- Last name input -->
                        <div class="form-outline mb-4">
                          <label
                            class="form-label"
                            for="registerLastname"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            id="registerLastname"
                            class="form-control"
                          />
                        </div>
  
                        <!-- Username input -->
                        <div class="form-outline mb-4">
                          <label
                            class="form-label"
                            for="registerUsername"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            id="registerUsername"
                            class="form-control"
                          />
                        </div>
  
                        <!-- Email input -->
                        <div class="form-outline mb-4">
                          <label
                            class="form-label"
                            for="registerEmail"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="registerEmail"
                            class="form-control"
                          />
                        </div>
  
                        <!-- Password input -->
                        <div class="form-outline mb-4">
                          <label
                            class="form-label"
                            for="registerPassword"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            id="registerPassword"
                            class="form-control"
                          />
                        </div>
  
                        <!-- Repeat Password input -->
                        <div class="form-outline mb-4">
                          <label
                            class="form-label"
                            for="registerRepeatPassword"
                          >
                            Repeat password
                          </label>
                          <input
                            type="password"
                            id="registerRepeatPassword"
                            class="form-control"
                          />
                        </div>
  
                        <!-- Submit button -->
                        <button
                          type="button"
                          id="register-btn"
                          class="btn btn-primary btn-block mb-3"
                        >
                          Sign in
                        </button>
                      </form>
                    </div>
                  </div>
                  <!-- Pills content -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  
  export default {
    name: 'HomeView',
    components: {
    }
  }
  </script>
  