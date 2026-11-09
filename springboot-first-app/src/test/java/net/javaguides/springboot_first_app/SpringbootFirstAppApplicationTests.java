
package net.javaguides.springboot_first_app;

import org.junit.jupiter.api.Test;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;

class SpringbootFirstAppApplicationTests {

    private final MockMvc mockMvc = MockMvcBuilders
            .standaloneSetup(new WelcomeController())
            .build();

    @Test
    void testWelcomeEndpoint() throws Exception {
        mockMvc.perform(get("/welcome"))
                .andExpect(status().isOk())
                .andExpect(content().string("welcome to sb"));
    }

    @Test
    void testRootEndpoint() throws Exception {
        mockMvc.perform(get("/"))
                .andExpect(status().isOk())
                .andExpect(content().string("welcome to sb"));
    }
}
