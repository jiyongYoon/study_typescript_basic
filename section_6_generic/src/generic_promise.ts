/**
 * 프로미스
 */

// 결과값의 타입은 기본적으로 unknown으로 추론됨
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

promise.then((response) => {
  // response: unknown
  console.log(response); // 20
});

promise.then((response) => {
  // 불가능 - unknown이기 때문에
  //   console.log(response * 10);
});

// 결과값의 타입은 제네릭으로 특정이 가능
// reject 값은 제네릭으로 특정 불가하여 타입가드를 통해서 타입좁히기를 해야함
const promise2 = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(30);
  }, 3000);
});

promise2.then((response) => {
  // 가능
  console.log(response * 100);
});

// 이와같이 타입좁히기를 하여 사용
promise2.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입 정의 예씨
 */
interface Post {
  id: number;
  title: string;
  content: string;
}
 
// 방법1
function fetchPost() {
  return new Promise<Post>((resolve, reject) => {
    resolve({
      id: 1,
      title: "게시글 제목",
      content: "컨텐츠",
    }),
      3000;
  });
}

const postRequest = fetchPost();
postRequest.then((post) => {
  console.log(post.id);
  console.log(post.title);
  console.log(post.content);
});

// 방법2 ===> 리턴타입이 명시적이라 더욱 추천
function fetchPost2(): Promise<Post> {
  return new Promise((resolve, reject) => {
    resolve({
      id: 1,
      title: "게시글 제목",
      content: "컨텐츠",
    }),
      3000;
  });
}

const postRequest2 = fetchPost2();
postRequest2.then((post) => {
  console.log(post.id);
  console.log(post.title);
  console.log(post.content);
});
