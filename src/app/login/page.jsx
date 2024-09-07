import React from 'react'
import '../assets/css/login.css'
import { HiUser } from "react-icons/hi2";
import { BsFillLockFill } from "react-icons/bs";
import Link from 'next/link';

export default function page() {
  return (
    <>
     <div class="login-page bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                  <h3 class="mb-3 pt-5">Login Now</h3>
                    <div class="bg-white shadow rounded">
                        <div class="row">
                            <div class="col-md-7 pe-0">
                                <div class="form-left h-100 py-5 px-5">
                                    <form action="" class="row g-4">
                                            <div class="col-12">
                                                <label>Username<span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    <div class="input-group-text"> <HiUser /></div>
                                                    <input type="text" class="form-control" placeholder="Enter Username"/>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <label>Password<span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><BsFillLockFill /></div>
                                                    <input type="text" class="form-control" placeholder="Enter Password"/>
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" id="inlineFormCheck"/>
                                                    <label class="form-check-label" for="inlineFormCheck">Remember me</label>
                                                </div>
                                            </div>

                                            <div class="col-sm-6">
                                                <a href="#" class="float-end text-primary">Forgot Password?</a>
                                            </div>

                                            <div class="col-12">
                                                <Link href={'/login'}>
                                                    <button type="button" class="btn btn-primary px-4 float-end mt-4 text-white">login</button>
                                                </Link>

                                                <Link href={'/'}>
                                                    <button type="button" class="btn btn-success px-4 float-end mt-4 me-3 text-white">Register</button>
                                                </Link>

                                            </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-5 ps-0 d-none d-md-block">
                                <div class="form-right h-100 bg-primary text-white text-center pt-5">
                                    <i class="bi bi-bootstrap"></i>
                                    <h2 class="fs-1">Welcome Back!!!</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    </>
  )
}
