function perlinNoise(x: number, y: number) {
  const permutation = [];
  for (let i = 0; i < 256; i++) {
    permutation.push(i);
  }

  permutation.sort(() => Math.random() - 0.5);
  const p = [...permutation, ...permutation];

  const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
  const lerp = (a: number, b: number, t: number) => a + t * (b - a);
  const grad = (hash: number, x: number, y: number) => {
    const h = hash & 3;
    const u = h < 2 ? x : y;
    const v = h < 2 ? y : x;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
  };

  const xi = Math.floor(x) & 255;
  const yi = Math.floor(y) & 255;

  const xf = x - Math.floor(x);
  const yf = y - Math.floor(y);

  const u = fade(xf);
  const v = fade(yf);

  const aa = p[p[xi] + yi];
  const ab = p[p[xi] + yi + 1];
  const ba = p[p[xi + 1] + yi];
  const bb = p[p[xi + 1] + yi + 1];

  const x1 = lerp(grad(aa, xf, yf), grad(ba, xf - 1, yf), u);
  const x2 = lerp(grad(ab, xf, yf - 1), grad(bb, xf - 1, yf - 1), u);
  return (lerp(x1, x2, v) + 1) / 2; // Normalize to range [0, 1]
}

// Lấy giá trị từ -0 đến -160
export function scaledPerlinNoise(x: number, y: number) {
  const noiseValue = perlinNoise(x, y); // Giá trị trong khoảng [0, 1]
  return noiseValue * -160; // Quy đổi về [-0, -160]
}
