use js_sys::{Array, Object, Reflect};
use wasm_bindgen::{JsValue, JsCast};
use crate::kline::SingleKLineInfo;

pub fn draw_all(info_array: &Array) {
    if info_array.length() == 0 {
        return;
    }

    for item in 0..info_array.length() {
        draw_single_k(&info_array.get(item))
    }
}

// 绘制单条K线
pub fn draw_single_k(single_info: &JsValue) {
    let key = JsValue::from_str("high");
    match Reflect::get(&single_info, &key)   {
        Ok(val) => {
            println!("value is {}", val.as_f64().unwrap());
        },
        Err(_) => {
            println!("err is what");
        }
    }
    // if single_info.is_object() {
    //     let single_info : &SingleKLineInfo = single_info.dyn_ref::<SingleKLineInfo>().unwrap();
    //     println!(single_info.close);
    // }
}