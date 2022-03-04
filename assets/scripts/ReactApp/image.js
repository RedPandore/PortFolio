export function imageUploadUrl(imageName) {
    try {
        return window.location.origin + `/uploads/images/${imageName}`;
    } catch (err) {
        return '';
    }
}