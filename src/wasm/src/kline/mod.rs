mod draw;

pub use draw::{ draw_single_k, draw_all };
use wasm_bindgen::JsCast;

pub struct SingleKLineInfo {
    pub high: f64,
    pub low: f64,
    pub open: f64,
    pub close: f64,
}