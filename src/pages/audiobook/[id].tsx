import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/utils/api";
import AppLayout from "@/components/layout/AppLayout";
import Image from "next/image";
import ReactPlayer from "react-player";
import Link from "next/link";
import { Button, Comment, Form, Header } from "semantic-ui-react";
import { Tabs } from "antd";
// import "semantic-ui-css/semantic.min.css";

const AudiobookDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const audiobookId = id as string;

  const { data: audiobookData, error } = useSWR(
    `http://localhost:8080/api/v1/audio-book/${audiobookId}`,
    fetcher
  );

  if (error) {
    return (
      <div className="text-xl font-semibold pt-5">
        Có lỗi xảy ra khi tải dữ liệu.
      </div>
    );
  }

  if (!audiobookData) {
    return (
      <div className="text-xl font-semibold pt-5">Đang tải dữ liệu...</div>
    );
  }

  const audiobook = audiobookData.data;

  const titles: { icon: ReactNode; name: string; children?: ReactNode }[] = [
    {
      icon: "",
      name: "Giới thiệu nội dung",
      children: (
        <>
          <div className="font-semibold text-2xl">Giới thiệu nội dung</div>
          <div className="mt-3 text-[16px]">{audiobook?.desc}</div>
        </>
      ),
    },
    {
      icon: "",
      name: "Bình luận",
      children: (
        <>
          <Comment.Group>
            <Header as="h3" dividing>
              Bình luận
            </Header>

            <Comment>
              <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
              <Comment.Content>
                <Comment.Author as="a">Matt</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>How artistic!</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Trả lời</Comment.Action>
                  <Comment.Action>Xóa</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>

            <Comment>
              <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg" />
              <Comment.Content>
                <Comment.Author as="a">Elliot Fu</Comment.Author>
                <Comment.Metadata>
                  <div>Hôm qua lúc 12:30</div>
                </Comment.Metadata>
                <Comment.Text>
                  <p>
                    This has been very useful for my research. Thanks as well!
                  </p>
                </Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Trả lời</Comment.Action>
                  <Comment.Action>Xóa</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
              <Comment.Group>
                <Comment>
                  <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg" />
                  <Comment.Content>
                    <Comment.Author as="a">Jenny Hess</Comment.Author>
                    <Comment.Metadata>
                      <div>Ngay bây giờ</div>
                    </Comment.Metadata>
                    <Comment.Text>
                      Elliot you are always so right :)
                    </Comment.Text>
                    <Comment.Actions>
                      <Comment.Action>Trả lời</Comment.Action>
                      <Comment.Action>Xóa</Comment.Action>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>
              </Comment.Group>
            </Comment>

            <Comment>
              <Comment.Avatar src="https://react.semantic-ui.com/images/avatar/small/joe.jpg" />
              <Comment.Content>
                <Comment.Author as="a">Joe Henderson</Comment.Author>
                <Comment.Metadata>
                  <div>5 ngày trước</div>
                </Comment.Metadata>
                <Comment.Text>
                  Dude, this is awesome. Thanks so much
                </Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Trả lời</Comment.Action>
                  <Comment.Action>Xóa</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>

            <Form reply>
              <Form.TextArea />
              <Button
                content="Add Reply"
                labelPosition="left"
                icon="edit"
                primary
              />
            </Form>
          </Comment.Group>
        </>
      ),
    },
    {
      icon: "",
      name: "Tác giả",
      children: (
        <>
          <div className="flex text-2xl font-semibold">
            <div className="mr-2">Về tác giả</div>
            <div>{audiobook?.author?.[0]?.name}</div>
          </div>
          <div className="text-[16px] mt-3">
            {audiobook?.author?.[0]?.description}
          </div>
        </>
      ),
    },
  ];

  return (
    <div>
      <div className="bg-red-700 h-[330px]">
        <AppLayout>
          <div className="flex text-white items-center h-[330px]">
            <Image
              className="rounded-lg w-[198px] h-[290px]"
              width={198}
              height={290}
              src={audiobook?.image}
              alt={audiobook?.title}
            />

            <div className="py-10 flex flex-col items-center flex-1 justify-center">
              <div className="mb-7 text-2xl font-semibold">
                {audiobook?.title}
              </div>
              <div className="mb-7 text-[18px]">
                {audiobook?.author?.[0]?.name}
              </div>
              <div className="mb-7 text-[18px]">{audiobook?.genre?.name}</div>

              {audiobook?.url ? (
                <ReactPlayer
                  url={audiobook?.url}
                  controls
                  width="50%"
                  height="40px"
                  config={{
                    file: {
                      hlsOptions: {
                        forceHLS: true,
                        debug: false,
                        xhrSetup: function (xhr: any, url: any) {
                          xhr.setRequestHeader(
                            "Authorization",
                            `Bearer ${JSON.parse(
                              localStorage.getItem("token") ?? ""
                            )}`
                          );
                        },
                      },
                    },
                  }}
                />
              ) : (
                <Link href="#" className="">
                  Bạn cần nâng cấp vip để nghe
                </Link>
              )}
            </div>

            <Image
              className="rounded-lg w-[198px] h-[290px]"
              width={198}
              height={290}
              src={audiobook?.author?.[0]?.image}
              alt={audiobook?.title}
            />
          </div>
        </AppLayout>
      </div>

      <div className="max-w-6xl mx-auto mt-[30px]">
        <Tabs
          defaultActiveKey="2"
          centered
          items={titles.map((title, i) => {
            const id = String(i + 1);

            return {
              label: <span>{title.name}</span>,
              key: id,
              children: title.children,
            };
          })}
        ></Tabs>
      </div>
    </div>
  );
};

export default AudiobookDetailPage;
