use web_sys::{Request, RequestInit, RequestMode, Response};
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;
use wasm_bindgen_futures::JsFuture;

pub async fn fetch_data(ts_code: &str, begin_date: &str, end_date: &str) {
    let mut opts = RequestInit::new();
    opts.method("GET");
    opts.mode(RequestMode::Cors);

    let url = "https://api.github.com/repos/{}/branches/master";

    let request = Request::new_with_str_and_init(&url, &opts).unwrap();

    request
        .headers()
        .set("Accept", "application/vnd.github.v3+json").unwrap();

    let window = web_sys::window().unwrap();
    let resp_value = JsFuture::from(window.fetch_with_request(&request)).await.unwrap();

    // `resp_value` is a `Response` object.
    assert!(resp_value.is_instance_of::<Response>());
    let resp: Response = resp_value.dyn_into().unwrap();

    // Convert this other `Promise` into a rust `Future`.
    let json = JsFuture::from(resp.json().unwrap()).await.unwrap();

    // Use serde to parse the JSON into a struct.
    // let branch_info: Branch = json.into_serde().unwrap();
}