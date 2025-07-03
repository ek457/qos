let canGenerateCode = true;

const lastGeneratedTime = localStorage.getItem('lastGeneratedTime');
if (lastGeneratedTime) {
    const currentTime = new Date().getTime();
    if (currentTime - lastGeneratedTime < 60000) {
        canGenerateCode = false;
    }
}

document.getElementById('get-code-btn').addEventListener('click', function() {
    if (!canGenerateCode) {
        alert('一分钟内只能获取一次激活码');
        return;
    }

    const selectedOsValue = document.getElementById('select-os').value;
    let activationCode = localStorage.getItem('activationCode_' + selectedOsValue);

    if (!activationCode) {
        switch (selectedOsValue) {
            case 'S':
                activationCode = "S" + Math.floor(Math.random() * 8999 + 1000);
                break;
            case 'H':
                activationCode = "H" + Math.floor(Math.random() * 8999 + 1000);
                break;
            case 'P':
                activationCode = "P" + Math.floor(Math.random() * 8999 + 1000);
                break;
            case 'U':
                activationCode = "U" + Math.floor(Math.random() * 8999 + 1000);
                break;
            default:
                activationCode = "L" + Math.floor(Math.random() * 8999 + 1000);
        }

        localStorage.setItem('activationCode_' + selectedOsValue, activationCode);
    }

    document.getElementById('code-input').value = activationCode;

    const codeInput = document.getElementById('code-input');
    codeInput.select();
    codeInput.setSelectionRange(0, 99999);

    try {
        document.execCommand('copy');
        console.log('激活码已复制到剪贴板');
    } catch (err) {
        console.error('无法复制激活码: ', err);
    }

    canGenerateCode = false;
    const currentTime = new Date().getTime();
    localStorage.setItem('lastGeneratedTime', currentTime);

    setTimeout(function() {
        canGenerateCode = true;
        localStorage.removeItem('lastGeneratedTime');
    }, 60000);
});
