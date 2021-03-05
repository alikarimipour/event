/**
 * 12/2/2018
 * author: alikarimipour157@gmail.com
 */
package ir.aliloc.api.core.multimedia;

import ir.aliloc.api.config.MessageConstant;
import ir.aliloc.api.core.models.init.MainModel;
import ir.aliloc.api.core.models.response.Post;
import ir.aliloc.api.exception.CustomizeResponseEntityExceptionHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/multimedia")
public class MultiMediaController {

    @Autowired
    private IMultiMediaService iMultiMediaService;

    //Save the uploaded file to this folder
    private static String UPLOADED_FOLDER = "C://alilocMultimedia//";

  /*  @RequestMapping(value = "/multimedia/add", method = RequestMethod.POST)
    public ResponseEntity<MainModel<List<UserRateDTO>>> getHistoryRateOfUser(@RequestBody OffsetSizeRequest offsetSizeRequest) {
        MainModel<List<UserRateDTO>> mainModel = new MainModel<>();
        try {
            mainModel.setMessage(MessageConstant.MESSAGE_SUCCESS);
            mainModel.setStatusCode(HttpStatus.OK.value());
            mainModel.setResult(rateService.getHistoryRateOfUser(offsetSizeRequest));
            return new ResponseEntity<>(mainModel, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new CustomizeResponseEntityExceptionHandler().handleAllExceptions(e);
        }
    }*/


    @PostMapping("/upload") // //new annotation since 4.3
    public ResponseEntity<MainModel<MultiMediaDTO>> singleFileUpload(@RequestParam("file") MultipartFile file) {

        MainModel<MultiMediaDTO> mainModel = new MainModel<>();
        try {
            if (file.isEmpty()) {
                throw new Exception("فایل خالیه");
            }
            mainModel.setResult(iMultiMediaService.addMultiMedia(file));
            mainModel.setStatusCode(HttpStatus.OK.value());
            mainModel.setMessage(MessageConstant.MESSAGE_SUCCESS);
            return new ResponseEntity<>(mainModel, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new CustomizeResponseEntityExceptionHandler().handleAllExceptions(e);
        }
    }

//    @PostMapping() // //new annotation since 4.3
    @GetMapping("/download")
    public ResponseEntity<InputStreamResource> downloadFileById(@RequestParam("id") long id) throws Exception {


        MultiMedia mainMultiMedia = iMultiMediaService.getMainMultiMediaById(id);
        InputStream targetStream = new ByteArrayInputStream(mainMultiMedia.getFile());
        InputStreamResource resource = new InputStreamResource(targetStream);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + mainMultiMedia.getName() + "\"")
                .contentLength(mainMultiMedia.getFile().length)
                .contentType(MediaType.parseMediaType("application/octet-stream"))
                .body(resource);

    }

    @GetMapping("/test") // //new annotation since 4.3
    public ResponseEntity sampleJsonGeneratorForTest() {
        List<Post> posts = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            Post post = new Post();
            post.setContent("salam" + i);
            post.setPostImageURL("http://185.86.36.19:8090/multimedia/download?id=9");
            posts.add(post);
        }
        return new ResponseEntity<>(posts, HttpStatus.OK);

    }
}
