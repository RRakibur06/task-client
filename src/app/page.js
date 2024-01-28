export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <form
        action="http://localhost:5000/api/input"
        method="post"
        encType="multipart/form-data"
        style={{
          height: "200px",
          width: "300px",
          border: "solid blue 1px",
          padding: "5px",
          margin: "auto",
          marginTop: "100px",
        }}
      >
        <label>Input a Powerpoint Presentation Slide</label>
        <input type="file" accept=".pptx" name="file" />
        <input
          type="submit"
          value="Submit"
          style={{
            height: "40px",
            width: "80px",
            background: "lightblue",
            boxShadow: "1px 1px lightgray",
            padding: "1px",
            marginTop: "5px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        />
      </form>
    </div>
  );
}
