import React from "react";
import { Segment, Button, Table } from "semantic-ui-react";
import "./productDetail.scss";
import Navbar from "../../components/navbar/navbar";

const ProductDetail = () => {
  return (
    <div>
        <Navbar/>
      <Segment className="detail-segment-container">
        <div className="detail-product-name">Ten Laptop</div>
        <div className="detail-status">
          <p>Tình trạng: Còn hàng</p>
          <p style={{ marginLeft: "20px" }}>Bảo hành: 24 tháng</p>
        </div>
        <hr style={{ width: "80%" }} />
        <div className="detail-container">
          <div className="detail-left">
            <img
              className="detail-image"
              src="https://philong.com.vn/media/product/24413-a477788167ae0ff601d0b182143d1ee8.jpg"
              alt=""
            />
            <div className="detail-list-images">
              {/* {data?.images?.map((item) => (
                <img className="detail-image-small" src={item} alt="" onClick={() => onChooseImage(item)} />
              ))} */}
            </div>
          </div>
          <div className="detail-main">
            <p>
              Giá bán: <span>10000000 VND</span>
            </p>
            <div className="detail-discount">
              <div className="discount-top">
                <p>Khuyến mãi - Quà tặng</p>
              </div>
              <div className="discount-content">something</div>
            </div>
            <div className="detail-buy">
              <Button color="red">MUA NGAY</Button>
              <p>
                GỌI NGAY <a href="tel:+84969442510"> 0379 26 6143 </a> ĐỂ GIỮ
                HÀNG
              </p>
            </div>
          </div>
          <div className="detail-right">
            <div>
              <span>Điện thoại tư vấn - Đặt hàng</span>
              <ul>
                <li>Kim Lý - 0904 555 666</li>
                <li>Huỳnh Lệ - 0345 789 789</li>
                <li>Văn Dũng - 0876 567 678</li>
              </ul>
            </div>
            <div>
              <span>Địa chỉ mua hàng</span>
              <ul>
                <li>152 ABC, Thanh Khê, TP. Đà Nẵng</li>
                <li>162 ABC, Thanh Khê, TP. Đà Nẵng</li>
                <li>172 ABC, Thanh Khê, TP. Đà Nẵng</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="specifications">
          <Table fixed>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>phần cứng</Table.HeaderCell>
                <Table.HeaderCell>thông số kĩ thuật</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>Model</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                
              </Table.Row>
              <Table.Row>
                <Table.Cell>Cpu</Table.Cell>
                <Table.Cell>Approved</Table.Cell>
                
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill</Table.Cell>
                <Table.Cell>Denied</Table.Cell>
                
              </Table.Row>
              
            </Table.Body>
          </Table>
        </div>
      </Segment>
    </div>
  );
};

export default ProductDetail;
