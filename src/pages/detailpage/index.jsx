import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from "reactstrap";
import classnames from "classnames";
import scrollToComponent from "react-scroll-to-component";
class Detailpage extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  }

  componentDidMount() {

      

    scrollToComponent(this.refs.name, {
      offset: 0,
      align: "top",
      duration: 500,
      ease: "inCirc"
    });

    var id = this.props.match.params.id;
    console.log("this.props", this.props);
    console.log("url_id", id);
    console.log("product props is", this.props.location.restaurant_data);
    console.log("state", this.state);
  }



  render() {
var detail = this.props.location.restaurant_data !== undefined ? this.props.location.restaurant_data : null
      console.log('detail::', detail)

    return (
      <div>
        <div className="page_content full_row">
          <div className="container">
            <ul className="breadcrumb reset">
              <li> 
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Restaurants</a>
              </li>
              <li>Bonafide Restaurant</li>
            </ul>
            <div className="detail listing">
              <div className="list_box">
                <div className="list_img">
                  <img src={detail.image_url} />
                </div>
                <div className="list_info">
                  <h4>{detail.name}</h4>
                  <p />
                  <div className="status">
                    <i className="fa fa-heart">(4)</i>
                    <span className="open">Open</span>
                    <span className="closed">Closed</span>
                  </div>
                </div>
                <div className="rating">
                  <p>
                    <span className="starbox small unchangeable" /> (4.0)
                  </p>
                  <i className="green fa fa-circle" />
                  <i className="red fa fa-circle" />
                </div>
                <p className="sub_info">
                  <span className="icon">
                    {" "}
                    <i className="delivery" />Delivery fee : <b>SAR 2</b>
                  </span>
                  <span className="icon">
                    {" "}
                    <i className="basket" />Min Order : <b>SAR 100</b>
                  </span>
                  <span className="icon">
                    {" "}
                    <i className="truck" />Delivery Time : <b>45 mins</b>
                  </span>
                  <span className="icon pl0">
                    Delivery Type: <b className="green_text">Pickup</b>
                  </span>
                </p>
              </div>

              <div className="payemtby">
                <span className="titleso">Pay By</span>
                <i className="icons_pay master" />
                <i className="icons_pay visa" />
                <i className="icons_pay sadsad" />
                <i className="icons_pay cshon" />
              </div>
            </div>

            <div className="mobile_option">
              <a className="btn_category col-xs-6">Menus</a>
              <a className="btn_cart col-xs-6">Cart (0)</a>
            </div>

            <div className="tab_content full_row">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1"
                    })}
                    onClick={() => {
                      this.toggle("1");
                    }}
                  >
                    Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2"
                    })}
                    onClick={() => {
                      this.toggle("2");
                    }}
                  >
                    Information
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "3"
                    })}
                    onClick={() => {
                      this.toggle("3");
                    }}
                  >
                    Rating
                  </NavLink>
                </NavItem>
              </Nav>

              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  {this.state.activeTab == 1 ? (
                    <div>
                      <div id="menu" class="row tab-pane active in">
                        <div
                          id="menu_category"
                          className="col-sm-3 menu_category sticky sidebar_main"
                        >
                          <ul className="reset">
                            <li className="title">
                              <i className="fa fa-cutlery" /> Sub Category
                            </li>
                            <li
                              className="active"
                              onClick={() =>
                                scrollToComponent(this.Violet, {
                                  offset: -80,
                                  align: "top",
                                  duration: 1500
                                })
                              }
                            >
                              <a>Starters</a>
                            </li>
                            <li
                              onClick={() =>
                                scrollToComponent(this.Indigo, {
                                  offset: -80,
                                  align: "top",
                                  duration: 500,
                                  ease: "inExpo"
                                })
                              }
                            >
                              <a>Veg Main</a>
                            </li>
                            <li>
                              <a
                                onClick={() =>
                                  scrollToComponent(this.Green, {
                                    offset: -80,
                                    align: "top",
                                    duration: 500,
                                    ease: "inExpo"
                                  })
                                }
                              >
                                Non Veg Main
                              </a>
                            </li>
                            <li>
                              <a
                                onClick={() =>
                                  scrollToComponent(this.Yellow, {
                                    offset: -80,
                                    align: "top",
                                    duration: 1500
                                  })
                                }
                              >
                                Soups
                              </a>
                            </li>
                            <li>
                              <a href="#id_5">Desserts</a>
                            </li>
                            <li>
                              <a href="#id_6">Beverages</a>
                            </li>
                            <li>
                              <a href="#id_7">Thalis & Meals</a>
                            </li>
                          </ul>
                        </div>

                        <div className="col-sm-6 menus">
                         <h4   ref={section => {
                              this.Violet = section;
                            }}>Starters</h4>
                          <div className="menu_list violet">
                            
                            <div className="img">
                              <a href="menu-detail.html">
                                <img src="images/item_1.jpg" />
                              </a>
                            </div>
                            <h5>
                              <a href="menu-detail.html">Chilli Chicken</a>
                            </h5>
                            <p className="grey_text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris malesuada mollis risus, ut ultricies
                              nisl viverra.
                            </p>
                            <span className="price">SAR 50.00</span>
                            <a
                              data-toggle="modal"
                              data-target="#modal_ingredients"
                              className="btn"
                            >
                              <i className="fa fa-plus-circle" /> Add
                            </a>
                          </div>

                          <div className="menu_list indigo">
                            <div className="img">
                              <a href="menu-detail.html">
                                <img src="images/item_2.jpg" />
                              </a>
                            </div>
                            <h5>
                              <a href="menu-detail.html">Chicken Monica</a>
                            </h5>
                            <p className="grey_text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris malesuada mollis risus, ut ultricies
                              nisl viverra.
                            </p>
                            <span className="price">
                              <b>SAR 100</b>.00
                            </span>
                            <a
                              data-toggle="modal"
                              data-target="#modal_ingredients"
                              className="btn"
                            >
                              <i className="fa fa-plus-circle" /> Add
                            </a>
                          </div>

                          <div className="menu_list">
                            <div className="img">
                              <a href="menu-detail.html">
                                <img src="images/item_3.jpg" />
                              </a>
                            </div>
                            <h5>
                              <a href="menu-detail.html">Chicken 65</a>
                            </h5>
                            <p className="grey_text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris malesuada mollis risus, ut ultricies
                              nisl viverra.
                            </p>
                            <span className="price">SAR 60.00</span>
                            <a
                              data-toggle="modal"
                              data-target="#modal_ingredients"
                              className="btn"
                            >
                              <i className="fa fa-plus-circle" /> Add
                            </a>
                          </div>

                          <div className="menu_list">
                            <div className="img">
                              <a href="menu-detail.html">
                                <img src="images/item_4.jpg" />
                              </a>
                            </div>
                            <h5>
                              <a href="menu-detail.html">Chicken Kabab</a>
                            </h5>
                            <p className="grey_text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris malesuada mollis risus, ut ultricies
                              nisl viverra.
                            </p>
                            <span className="price">SAR 50.00</span>
                            <a
                              data-toggle="modal"
                              data-target="#modal_ingredients"
                              className="btn"
                            >
                              <i className="fa fa-plus-circle" /> Add
                            </a>
                          </div>
                          <div className="menu_list">
                            <div className="img">
                              <a href="menu-detail.html">
                                <img src="images/item_5.jpg" />
                              </a>
                            </div>
                            <h5>
                              <a href="menu-detail.html">Chicken Lollypop</a>
                            </h5>
                            <p className="grey_text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris malesuada mollis risus, ut ultricies
                              nisl viverra.
                            </p>
                            <span className="price">
                              <b>SAR 100</b>.00
                            </span>
                            <a
                              data-toggle="modal"
                              data-target="#modal_ingredients"
                              className="btn"
                            >
                              <i className="fa fa-plus-circle" /> Add
                            </a>
                          </div>

                            <h4 ref={section => {
                              this.Indigo = section;
                            }}>Veg Main</h4>
                          <div
                            className="menu_list">
                            
                            <div className="img">
                              <a href="menu-detail.html">
                                <img src="images/item_1.jpg" />
                              </a>
                            </div>
                            <h5>
                              <a href="menu-detail.html">Chilli Chicken</a>
                            </h5>
                            <p className="grey_text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris malesuada mollis risus, ut ultricies
                              nisl viverra.
                            </p>
                            <span className="price">SAR 50.00</span>
                            <a
                              data-toggle="modal"
                              data-target="#modal_ingredients"
                              className="btn"
                            >
                              <i className="fa fa-plus-circle" /> Add
                            </a>
                          </div>
                          <div className="menu_list">
                            <div className="img">
                              <a href="menu-detail.html">
                                <img src="images/item_2.jpg" />
                              </a>
                            </div>
                            <h5>
                              <a href="menu-detail.html">Chicken Monica</a>
                            </h5>
                            <p className="grey_text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris malesuada mollis risus, ut ultricies
                              nisl viverra.
                            </p>
                            <span className="price">
                              <b>SAR 100</b>.00
                            </span>
                            <a
                              data-toggle="modal"
                              data-target="#modal_ingredients"
                              className="btn"
                            >
                              <i className="fa fa-plus-circle" /> Add
                            </a>
                          </div>

                          <h4
                            ref={section => {
                              this.Green = section;
                            }}
                          >
                            Non Veg Main
                          </h4>
                          <div className="menu_list">
                            <div className="img">
                              <a href="menu-detail.html">
                                <img src="images/item_1.jpg" />
                              </a>
                            </div>
                            <h5>
                              <a href="menu-detail.html">Chilli Chicken</a>
                            </h5>
                            <p className="grey_text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris malesuada mollis risus, ut ultricies
                              nisl viverra.
                            </p>
                            <span className="price">SAR 50.00</span>
                            <a
                              data-toggle="modal"
                              data-target="#modal_ingredients"
                              className="btn"
                            >
                              <i className="fa fa-plus-circle" /> Add
                            </a>
                          </div>

                          <div className="menu_list">
                            <div className="img">
                              <a href="menu-detail.html">
                                <img src="images/item_2.jpg" />
                              </a>
                            </div>
                            <h5>
                              <a href="menu-detail.html">Chicken Monica</a>
                            </h5>
                            <p className="grey_text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris malesuada mollis risus, ut ultricies
                              nisl viverra.
                            </p>
                            <span className="price">
                              <b>SAR 100</b>.00
                            </span>
                            <a
                              data-toggle="modal"
                              data-target="#modal_ingredients"
                              className="btn"
                            >
                              <i className="fa fa-plus-circle" /> Add
                            </a>
                          </div>

                          <h4
                            ref={section => {
                              this.Yellow = section;
                            }}
                          >
                            Soups
                          </h4>
                          <div className="menu_list">
                            <div className="img">
                              <a href="menu-detail.html">
                                <img src="images/item_1.jpg" />
                              </a>
                            </div>
                            <h5>
                              <a href="menu-detail.html">Chilli Chicken</a>
                            </h5>
                            <p className="grey_text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris malesuada mollis risus, ut ultricies
                              nisl viverra.
                            </p>
                            <span className="price">SAR 50.00</span>
                            <a
                              data-toggle="modal"
                              data-target="#modal_ingredients"
                              className="btn"
                            >
                              <i className="fa fa-plus-circle" /> Add
                            </a>
                          </div>

                          <div className="menu_list">
                            <div className="img">
                              <a href="menu-detail.html">
                                <img src="images/item_2.jpg" />
                              </a>
                            </div>
                            <h5>
                              <a href="menu-detail.html">Chicken Monica</a>
                            </h5>
                            <p className="grey_text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris malesuada mollis risus, ut ultricies
                              nisl viverra.
                            </p>
                            <span className="price">
                              <b>SAR 100</b>.00
                            </span>
                            <a
                              data-toggle="modal"
                              data-target="#modal_ingredients"
                              className="btn"
                            >
                              <i className="fa fa-plus-circle" /> Add
                            </a>
                          </div>

                          <h4 id="id_5">Desserts</h4>
                          <div className="menu_list">
                            <div className="img">
                              <a href="menu-detail.html">
                                <img src="images/item_1.jpg" />
                              </a>
                            </div>
                            <h5>
                              <a href="menu-detail.html">Chilli Chicken</a>
                            </h5>
                            <p className="grey_text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris malesuada mollis risus, ut ultricies
                              nisl viverra.
                            </p>
                            <span className="price">SAR 50.00</span>
                            <a
                              data-toggle="modal"
                              data-target="#modal_ingredients"
                              className="btn"
                            >
                              <i className="fa fa-plus-circle" /> Add
                            </a>
                          </div>

                          <div className="menu_list">
                            <div className="img">
                              <a href="menu-detail.html">
                                <img src="images/item_2.jpg" />
                              </a>
                            </div>
                            <h5>
                              <a href="menu-detail.html">Chicken Monica</a>
                            </h5>
                            <p className="grey_text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris malesuada mollis risus, ut ultricies
                              nisl viverra.
                            </p>
                            <span className="price">
                              <b>SAR 100</b>.00
                            </span>
                            <a
                              data-toggle="modal"
                              data-target="#modal_ingredients"
                              className="btn"
                            >
                              <i className="fa fa-plus-circle" /> Add
                            </a>
                          </div>

                          <h4 id="id_6">Beverages</h4>
                          <div className="menu_list">
                            <div className="img">
                              <a href="menu-detail.html">
                                <img src="images/item_1.jpg" />
                              </a>
                            </div>
                            <h5>
                              <a href="menu-detail.html">Chilli Chicken</a>
                            </h5>
                            <p className="grey_text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris malesuada mollis risus, ut ultricies
                              nisl viverra.
                            </p>
                            <span className="price">SAR 50.00</span>
                            <a
                              data-toggle="modal"
                              data-target="#modal_ingredients"
                              className="btn"
                            >
                              <i className="fa fa-plus-circle" /> Add
                            </a>
                          </div>

                          <div className="menu_list">
                            <div className="img">
                              <a href="menu-detail.html">
                                <img src="images/item_2.jpg" />
                              </a>
                            </div>
                            <h5>
                              <a href="menu-detail.html">Chicken Monica</a>
                            </h5>
                            <p className="grey_text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris malesuada mollis risus, ut ultricies
                              nisl viverra.
                            </p>
                            <span className="price">
                              <b>SAR 100</b>.00
                            </span>
                            <a
                              data-toggle="modal"
                              data-target="#modal_ingredients"
                              className="btn"
                            >
                              <i className="fa fa-plus-circle" /> Add
                            </a>
                          </div>

                          <h4 id="id_7">Thalis & Meals</h4>
                          <div className="menu_list">
                            <div className="img">
                              <a href="menu-detail.html">
                                <img src="images/item_1.jpg" />
                              </a>
                            </div>
                            <h5>
                              <a href="menu-detail.html">Chilli Chicken</a>
                            </h5>
                            <p className="grey_text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris malesuada mollis risus, ut ultricies
                              nisl viverra.
                            </p>
                            <span className="price">SAR 50.00</span>
                            <a
                              data-toggle="modal"
                              data-target="#modal_ingredients"
                              className="btn"
                            >
                              <i className="fa fa-plus-circle" /> Add
                            </a>
                          </div>

                          <div className="menu_list">
                            <div className="img">
                              <a href="menu-detail.html">
                                <img src="images/item_2.jpg" />
                              </a>
                            </div>
                            <h5>
                              <a href="menu-detail.html">Chicken Monica</a>
                            </h5>
                            <p className="grey_text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Mauris malesuada mollis risus, ut ultricies
                              nisl viverra.
                            </p>
                            <span className="price">
                              <b>SAR 100</b>.00
                            </span>
                            <a
                              data-toggle="modal"
                              data-target="#modal_ingredients"
                              className="btn"
                            >
                              <i className="fa fa-plus-circle" /> Add
                            </a>
                          </div>
                        </div>

                        <div
                          id="mini_cart"
                          className="col-sm-3 sidebar_main"
                          data-sticky_column
                        >
                          <div className="mini_cart">
                            <h4 className="title">
                              <i className="fa fa-shopping-basket" />Cart
                              Summary
                            </h4>
                            <ul className="cart_main reset">
                              <li className="empty">
                                <i className="fa fa-shopping-cart" />Your cart
                                is empty!
                              </li>

                              <li className="head">
                                <h5>Bonafide Restaurant</h5>
                              </li>
                              <li>
                                <h6>Chilli Chicken</h6>
                                <span className="qty_box">
                                  <button className="btn first">
                                    <i className="fa fa-minus" />
                                  </button>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value="2"
                                  />
                                  <button className="btn last">
                                    <i className="fa fa-plus" />
                                  </button>
                                </span>
                                <span className="price">
                                  <b>SAR 100</b>
                                </span>
                                <a className="remove">
                                  <i className="fa fa-times-circle" />
                                </a>
                              </li>
                              <li>
                                <h6>Chicken Monica</h6>
                                <span className="qty_box">
                                  <button className="btn first">
                                    <i className="fa fa-minus" />
                                  </button>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value="2"
                                  />
                                  <button className="btn last">
                                    <i className="fa fa-plus" />
                                  </button>
                                </span>
                                <span className="price">
                                  <b>SAR 100</b>
                                </span>
                                <a className="remove">
                                  <i className="fa fa-times-circle" />
                                </a>
                              </li>
                              <li>
                                <ul className="reset table">
                                  <li>
                                    <span className="td">Sub Total</span>
                                    <span className="td"> SAR 150</span>
                                  </li>
                                  <li>
                                    <span className="td">Vat (5%)</span>
                                    <span className="td">SAR 10</span>
                                  </li>
                                  <li>
                                    <span className="td">
                                      Service Charge (2%)
                                    </span>
                                    <span className="td">SAR 10</span>
                                  </li>
                                  <li>
                                    <span className="td">Delivery Fee</span>
                                    <span className="td">SAR 10</span>
                                  </li>
                                  <li className="total">
                                    <span className="td">Total</span>
                                    <span className="td">SAR 180</span>
                                  </li>
                                </ul>
                              </li>

                              <li className="head">
                                <h5>Bonafide Restaurant</h5>
                              </li>
                              <li>
                                <h6>Chilli Chicken</h6>
                                <span className="qty_box">
                                  <button className="btn first">
                                    <i className="fa fa-minus" />
                                  </button>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value="2"
                                  />
                                  <button className="btn last">
                                    <i className="fa fa-plus" />
                                  </button>
                                </span>
                                <span className="price">
                                  <b>SAR 100</b>
                                </span>
                                <a className="remove">
                                  <i className="fa fa-times-circle" />
                                </a>
                              </li>
                              <li>
                                <h6>Chicken Monica</h6>
                                <span className="qty_box">
                                  <button className="btn first">
                                    <i className="fa fa-minus" />
                                  </button>
                                  <input
                                    type="text"
                                    className="form-control"
                                    value="2"
                                  />
                                  <button className="btn last">
                                    <i className="fa fa-plus" />
                                  </button>
                                </span>
                                <span className="price">
                                  <b>SAR 100</b>
                                </span>
                                <a className="remove">
                                  <i className="fa fa-times-circle" />
                                </a>
                              </li>
                              <li>
                                <ul className="reset table">
                                  <li>
                                    <span className="td">Sub Total</span>
                                    <span className="td"> SAR 150</span>
                                  </li>
                                  <li>
                                    <span className="td">Vat (5%)</span>
                                    <span className="td">SAR 10</span>
                                  </li>
                                  <li>
                                    <span className="td">
                                      Service Charge (2%)
                                    </span>
                                    <span className="td">SAR 10</span>
                                  </li>
                                  <li>
                                    <span className="td">Delivery Fee</span>
                                    <span className="td">SAR 10</span>
                                  </li>
                                  <li className="total">
                                    <span className="td">Total</span>
                                    <span className="td">SAR 180</span>
                                  </li>
                                </ul>
                              </li>
                            </ul>

                            <ul className="table total reset">
                              <li>
                                <span className="td">Grand Total</span>
                                <span className="td">SAR 1180</span>
                              </li>
                            </ul>

                            <a href="cart.html" className="btn full">
                              Checkout
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </TabPane>
                <TabPane tabId="2">
                  {this.state.activeTab == 2 ? <h4>Tab 2 Contents</h4> : null}
                </TabPane>
                <TabPane tabId="3">
                  {this.state.activeTab == 3 ? <h4>Tab 3 Contents</h4> : null}
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detailpage;
