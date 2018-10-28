import Link from "next/link";
import { Col, Card, Icon } from "antd";
const { Meta } = Card;

export default ({id, name, subtitle, photoUrl}) => (
    <Col style={{ marginBottom: "25px" }}>
        <Link href={`/product?id=${id}`} as={`/product/${id}`}>
            <a>
                <Card
                    hoverable
                    actions={[
                                <Icon type="eye" theme="outline" />
                            ]}
                            cover={
                                <img
                                alt="example"
                                src={photoUrl}
                                height={"200px"}
                                />
                            }
                            >
                    <Meta title={name} description={subtitle} />
                </Card>
            </a>
        </Link>
    </Col>
);
