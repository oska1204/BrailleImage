const [
    input,
    sliderR,
    sliderG,
    sliderB,
    sliderLevel,
    sliderWidth,
    sliderContrast,
    sliderGrayscale,
    checkInvert,
    backgroundColor,
    themeColor,
    themeBackground,
] = inputs = Array.from(document.querySelectorAll('input'))
inputs = inputs.slice(1, -2)
const c = document.querySelector('canvas')
const img = document.querySelector('img')
const txt = document.querySelector('textarea')
const invertBraille = document.querySelector('#invert-braille')
const toggleTheme = document.querySelector('#toggle-theme')
const resetTheme = document.querySelector('#reset-theme')

const braille = JSON.parse(`{"10000000":"⠁","10000001":"⢁","10000010":"⠡","10000011":"⢡","10000100":"⠑","10000101":"⢑","10000110":"⠱","10000111":"⢱","10001000":"⠉","10001001":"⢉","10001010":"⠩","10001011":"⢩","10001100":"⠙","10001101":"⢙","10001110":"⠹","10001111":"⢹","10010000":"⡁","10010001":"⣁","10010010":"⡡","10010011":"⣡","10010100":"⡑","10010101":"⣑","10010110":"⡱","10010111":"⣱","10011000":"⡉","10011001":"⣉","10011010":"⡩","10011011":"⣩","10011100":"⡙","10011101":"⣙","10011110":"⡹","10011111":"⣹","10100000":"⠅","10100001":"⢅","10100010":"⠥","10100011":"⢥","10100100":"⠕","10100101":"⢕","10100110":"⠵","10100111":"⢵","10101000":"⠍","10101001":"⢍","10101010":"⠭","10101011":"⢭","10101100":"⠝","10101101":"⢝","10101110":"⠽","10101111":"⢽","10110000":"⡅","10110001":"⣅","10110010":"⡥","10110011":"⣥","10110100":"⡕","10110101":"⣕","10110110":"⡵","10110111":"⣵","10111000":"⡍","10111001":"⣍","10111010":"⡭","10111011":"⣭","10111100":"⡝","10111101":"⣝","10111110":"⡽","10111111":"⣽","11000000":"⠃","11000001":"⢃","11000010":"⠣","11000011":"⢣","11000100":"⠓","11000101":"⢓","11000110":"⠳","11000111":"⢳","11001000":"⠋","11001001":"⢋","11001010":"⠫","11001011":"⢫","11001100":"⠛","11001101":"⢛","11001110":"⠻","11001111":"⢻","11010000":"⡃","11010001":"⣃","11010010":"⡣","11010011":"⣣","11010100":"⡓","11010101":"⣓","11010110":"⡳","11010111":"⣳","11011000":"⡋","11011001":"⣋","11011010":"⡫","11011011":"⣫","11011100":"⡛","11011101":"⣛","11011110":"⡻","11011111":"⣻","11100000":"⠇","11100001":"⢇","11100010":"⠧","11100011":"⢧","11100100":"⠗","11100101":"⢗","11100110":"⠷","11100111":"⢷","11101000":"⠏","11101001":"⢏","11101010":"⠯","11101011":"⢯","11101100":"⠟","11101101":"⢟","11101110":"⠿","11101111":"⢿","11110000":"⡇","11110001":"⣇","11110010":"⡧","11110011":"⣧","11110100":"⡗","11110101":"⣗","11110110":"⡷","11110111":"⣷","11111000":"⡏","11111001":"⣏","11111010":"⡯","11111011":"⣯","11111100":"⡟","11111101":"⣟","11111110":"⡿","11111111":"⣿","00000000":"⠄","01000000":"⠂","00100000":"⠄","01100000":"⠆","00001000":"⠈","01001000":"⠊","00101000":"⠌","01101000":"⠎","00000100":"⠐","01000100":"⠒","00100100":"⠔","01100100":"⠖","00001100":"⠘","01001100":"⠚","00101100":"⠜","01101100":"⠞","00000010":"⠠","01000010":"⠢","00100010":"⠤","01100010":"⠦","00001010":"⠨","01001010":"⠪","00101010":"⠬","01101010":"⠮","00000110":"⠰","01000110":"⠲","00100110":"⠴","01100110":"⠶","00001110":"⠸","01001110":"⠺","00101110":"⠼","01101110":"⠾","00010000":"⡀","01010000":"⡂","00110000":"⡄","01110000":"⡆","00011000":"⡈","01011000":"⡊","00111000":"⡌","01111000":"⡎","00010100":"⡐","01010100":"⡒","00110100":"⡔","01110100":"⡖","00011100":"⡘","01011100":"⡚","00111100":"⡜","01111100":"⡞","00010010":"⡠","01010010":"⡢","00110010":"⡤","01110010":"⡦","00011010":"⡨","01011010":"⡪","00111010":"⡬","01111010":"⡮","00010110":"⡰","01010110":"⡲","00110110":"⡴","01110110":"⡶","00011110":"⡸","01011110":"⡺","00111110":"⡼","01111110":"⡾","00000001":"⢀","01000001":"⢂","00100001":"⢄","01100001":"⢆","00001001":"⢈","01001001":"⢊","00101001":"⢌","01101001":"⢎","00000101":"⢐","01000101":"⢒","00100101":"⢔","01100101":"⢖","00001101":"⢘","01001101":"⢚","00101101":"⢜","01101101":"⢞","00000011":"⢠","01000011":"⢢","00100011":"⢤","01100011":"⢦","00001011":"⢨","01001011":"⢪","00101011":"⢬","01101011":"⢮","00000111":"⢰","01000111":"⢲","00100111":"⢴","01100111":"⢶","00001111":"⢸","01001111":"⢺","00101111":"⢼","01101111":"⢾","00010001":"⣀","01010001":"⣂","00110001":"⣄","01110001":"⣆","00011001":"⣈","01011001":"⣊","00111001":"⣌","01111001":"⣎","00010101":"⣐","01010101":"⣒","00110101":"⣔","01110101":"⣖","00011101":"⣘","01011101":"⣚","00111101":"⣜","01111101":"⣞","00010011":"⣠","01010011":"⣢","00110011":"⣤","01110011":"⣦","00011011":"⣨","01011011":"⣪","00111011":"⣬","01111011":"⣮","00010111":"⣰","01010111":"⣲","00110111":"⣴","01110111":"⣶","00011111":"⣸","01011111":"⣺","00111111":"⣼","01111111":"⣾"}`)

const oBraille = {}

for (const key in braille) {
    if (braille.hasOwnProperty(key)) {
        const e = braille[key];
        oBraille[e] = key
    }
}

oBraille['⠄'] = '00000000'

const ct = c.getContext('2d')

let darkCol = '#ffffff',
    lightCol = '#000000',
    darkBack = '#000000',
    lightBack = '#ffffff'

darkCol = localStorage.darkCol || darkCol
lightCol = localStorage.lightCol || lightCol
darkBack = localStorage.darkBack || darkBack
lightBack = localStorage.lightBack || lightBack

document.documentElement.style.cssText += `--dark-color: ${darkCol};`
document.documentElement.style.cssText += `--light-color: ${lightCol};`
document.documentElement.style.cssText += `--dark-background: ${darkBack};`
document.documentElement.style.cssText += `--light-background: ${lightBack};`

themeColor.value = document.documentElement.classList.contains('dark') ? darkCol : lightCol
themeBackground.value = document.documentElement.classList.contains('dark') ? darkBack : lightBack

localStorage.defaultTheme === 'true' ? document.documentElement.classList.add('dark') : undefined

img.src = localStorage.img

update()

sliderR.addEventListener('input', update)

sliderG.addEventListener('input', update)

sliderB.addEventListener('input', update)

sliderLevel.addEventListener('input', update)

sliderWidth.addEventListener('input', update)

sliderWidth.addEventListener('wheel', function (e) {
    this.focus()
    if (e.deltaY < 0)
        this.value = ~~this.value + .5
    else
        this.value = ~~this.value - .5
})

sliderContrast.addEventListener('input', update)

sliderGrayscale.addEventListener('input', update)

checkInvert.addEventListener('input', update)

backgroundColor.addEventListener('input', update)

invertBraille.addEventListener('click', () => {
    txt.value = txt.value.split('').map(e => e !== '\n' ? braille[oBraille[e].split('').map(e => e === '1' ? 0 : 1).join('')] : e).join('')
})

toggleTheme.addEventListener('click', function () {
    const what = document.documentElement.classList.toggle('dark')
    this.nextElementSibling.textContent = what ? 'Dark Theme' : 'Light Theme'
    themeColor.value = what ? darkCol : lightCol
    themeBackground.value = what ? darkBack : lightBack
    localStorage.defaultTheme = what
})

themeColor.addEventListener('input', function () {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.style.cssText += `--dark-color: ${this.value};`
        darkCol = this.value
        localStorage.darkCol = this.value
    } else {
        document.documentElement.style.cssText += `--light-color: ${this.value};`
        lightCol = this.value
        localStorage.lightCol = this.value
    }
})

themeBackground.addEventListener('input', function () {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.style.cssText += `--dark-background: ${this.value};`
        darkBack = this.value
        localStorage.darkBack = this.value
    } else {
        document.documentElement.style.cssText += `--light-background: ${this.value};`
        lightBack = this.value
        localStorage.lightBack = this.value
    }
})

resetTheme.addEventListener('click', function () {
    const white = '#ffffff'
    const black = '#000000'
    document.documentElement.style.cssText += `--dark-color: ${white};`
    darkCol = white
    localStorage.darkCol = white
    document.documentElement.style.cssText += `--light-color: ${black};`
    lightCol = black
    localStorage.lightCol = black
    document.documentElement.style.cssText += `--dark-background: ${black};`
    darkBack = black
    localStorage.darkBack = black
    document.documentElement.style.cssText += `--light-background: ${white};`
    lightBack = white
    localStorage.lightBack = white
    themeColor.value = document.documentElement.classList.contains('dark') ? white : black
    themeBackground.value = document.documentElement.classList.contains('dark') ? black : white
})

input.addEventListener('input', function () {
    img.src = URL.createObjectURL(this.files[0])
    img.onload = () => {
        const c2 = document.createElement('canvas')
        c2.width = img.naturalWidth
        c2.height = img.naturalHeight
        c2t = c2.getContext('2d')
        c2t.drawImage(img, 0, 0)
        localStorage.img = c2.toDataURL()
        update()
    }
})

function update(rr = sliderR.value, gg = sliderG.value, bb = sliderB.value, level = sliderLevel.value, width = sliderWidth.value, contrast = sliderContrast.value, grayscale = sliderGrayscale.value, invert = checkInvert.value, background = backgroundColor.value) {
    inputs.forEach(e => {
        e.nextElementSibling.textContent = e.value
    });
    const ratio = img.width / img.height
    c.width = width
    c.height = width / ratio
    ct.fillStyle = background
    ct.fillRect(0, 0, c.width, c.height)
    ct.filter = `contrast(${contrast}) grayscale(${grayscale}) invert(${invert})`
    ct.drawImage(img, 0, 0, c.width, c.height)
    const arr = []
    for (let y = 0; y < c.height; y += 4) {
        for (let x = 0; x < c.width; x += 2) {
            const data = new Uint8Array(ct.getImageData(x, y, 2, 4).data)
            let str = ''
            for (let i = 0; i < data.length; i += 4) {
                const [r, g, b, a] = [data[i], data[i + 1], data[i + 2], data[i + 3]]
                rv = rr < r ? 1 : 0
                gv = gg < g ? 1 : 0
                bv = bb < b ? 1 : 0
                str += rv + gv + bv < level ? a ? 1 : 0 : 0
            }
            arr.push(braille[str])
        }
        arr.push('\n')
    }
    txt.value = arr.join('').slice(0, -1)
}
