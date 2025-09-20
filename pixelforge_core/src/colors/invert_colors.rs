use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen]
pub fn invert_colors(width: u32, height: u32, data: &mut [u8]) {
    for i in 0..(width*height*4) as usize {
        data[i] = 255 - data[i];
    }
}